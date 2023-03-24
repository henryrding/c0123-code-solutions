import express from 'express';
import pg from 'pg';

const app = express();
app.use(express.json());

const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    rejectUnauthorized: false
  }
});

app.get('/api/grades/:gradeId', async (req, res) => {
  try {
    const gradeId = Number(req.params.gradeId);
    if (!Number.isInteger(gradeId) || gradeId <= 0) {
      res.status(400).json({ error: '"gradeId" must be a positive integer' });
      return;
    }
    const sql = `
      select *
        from "grades"
       where "gradeId" = $1
    `;
    const params = [gradeId];
    const result = await db.query(sql, params);
    const grade = result.rows[0];
    if (grade) {
      res.json(grade);
    } else {
      res.status(404).json({ error: `Cannot find grade with "gradeId" ${gradeId}` });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'An unexpected error occurred.' });
  }
});

app.get('/api/grades', async (req, res) => {
  try {
    const sql = `
      select *
        from "grades";
    `;
    const result = await db.query(sql);
    const gradesArray = result.rows;
    res.json(gradesArray);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'An unexpected error occurred.' });
  }
});

app.post('/api/grades', async (req, res) => {
  try {
    const gradeInput = req.body;
    const validKeys = ['name', 'course', 'score'];
    for (const key of validKeys) {
      if (!Object.hasOwn(gradeInput, key)) {
        res.status(400).json({ error: `Input must include "${key}"` });
        return;
      }
    }
    const { course, name, score } = gradeInput;
    if (!Number.isInteger(score) || score < 0 || score > 100) {
      res.status(400).json({ error: 'Value of "score" must be an integer from 0 to 100.' });
      return;
    }
    if (Object.keys(gradeInput).length > 3) {
      res.status(400).json({ error: 'Input must only include "name", "course", and "score"' });
      return;
    }
    const sql = `
      insert  into "grades" ("name", "course", "score")
        values ($1, $2, $3)
        returning *;
    `;
    const params = [name, course, score];
    const result = await db.query(sql, params);
    const grade = result.rows[0];
    res.status(201).json(grade);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'An unexpected error occurred.' });
  }
});

app.put('/api/grades/:gradeId', async (req, res) => {
  try {
    const gradeId = Number(req.params.gradeId);
    if (!Number.isInteger(gradeId) || gradeId <= 0) {
      res.status(400).json({ error: '"gradeId" must be a positive integer' });
      return;
    }
    const gradeInput = req.body;
    const validKeys = ['name', 'course', 'score'];
    for (const key of validKeys) {
      if (!gradeInput[key]) {
        res.status(400).json({ error: `Input must include "${key}"` });
        return;
      }
    }
    const { course, name, score } = gradeInput;
    if (!Number.isInteger(score) || score < 0 || score > 100) {
      res.status(400).json({ error: 'Value of "score" must be an integer from 0 to 100.' });
      return;
    } else if (Object.keys(gradeInput).length > 3) {
      res.status(400).json({ error: 'Input must only include "name", "course", and "score"' });
      return;
    }
    const sql = `
      update "grades"
         set "name" = $1,
             "course" = $2,
             "score" = $3
       where "gradeId" = $4
       returning *;
    `;
    const params = [name, course, score, gradeId];
    const result = await db.query(sql, params);
    const updatedGrade = result.rows[0];
    if (updatedGrade) {
      res.json(updatedGrade);
    } else {
      res.status(404).json({ error: `Cannot find grade with "gradeId" ${gradeId}` });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'An unexpected error occurred.' });
  }
});

app.delete('/api/grades/:gradeId', async (req, res) => {
  try {
    const gradeId = Number(req.params.gradeId);
    if (!Number.isInteger(gradeId) || gradeId <= 0) {
      res.status(400).json({ error: '"gradeId" must be a positive integer' });
      return;
    }
    const sql = `
      delete
        from "grades"
       where "gradeId" = $1
       returning *;
    `;
    const params = [gradeId];
    const result = await db.query(sql, params);
    const deletedGrade = result.rows[0];
    if (deletedGrade) {
      res.status(204).json(deletedGrade);
    } else {
      res.status(404).json({ error: `Cannot find grade with "gradeId" ${gradeId}` });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'An unexpected error occurred.' });
  }
});

app.use((req, res) => {
  res.status(404).json({ error: 'Path not found, please try again.' });
});

app.listen(8080, () => console.log('Express server is listening on port 8080.'));
