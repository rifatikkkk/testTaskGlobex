
USE testTaskGlobex


SELECT * FROM dbo.collaborators
SELECT * FROM dbo.subdivisions


-- PERFORM IN ONE BLOCK
WITH employeesCustom AS (
      SELECT dbo.subdivisions.id AS sub_id, dbo.subdivisions.name AS sub_name, 0 AS sub_level
      FROM dbo.subdivisions
      WHERE parent_id IS NULL
      UNION ALL
      SELECT dbo.subdivisions.id, dbo.subdivisions.name AS sub_name, employeesCustom.sub_level + 1 AS sub_level
      FROM dbo.subdivisions JOIN
           employeesCustom
           ON dbo.subdivisions.parent_id = employeesCustom.sub_id
     )
SELECT c.id, c.name, e.sub_name, e.sub_id, e.sub_level, 
	(SELECT COUNT (*) FROM dbo.collaborators AS coll WHERE coll.subdivision_id = c.subdivision_id) AS colls_count FROM employeesCustom AS e JOIN dbo.collaborators AS c ON e.sub_id = c.subdivision_id
	WHERE e.sub_id NOT IN (100055, 100059) AND c.age < 40 AND c.id >= 710253
	GROUP BY c.id, c.name, e.sub_name, e.sub_id, e.sub_level, c.subdivision_id
	ORDER BY e.sub_level
-- END