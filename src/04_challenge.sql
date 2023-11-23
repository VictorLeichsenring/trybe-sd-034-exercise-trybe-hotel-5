SELECT 
  h.name,
  r.price
FROM hotels AS h
INNER JOIN rooms AS r
  ON h.id = r.hotel_id
WHERE r.available = TRUE
ORDER BY r.price ASC
LIMIT 2 OFFSET 2;

