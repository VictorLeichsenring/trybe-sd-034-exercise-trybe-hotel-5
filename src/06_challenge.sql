SELECT
 h.name as 'name',
 min(r.price) as 'barato',
 max(r.price) as 'caro'
FROM hotels as h
INNER JOIN rooms as r on h.id = r.hotel_id
GROUP BY h.name
ORDER BY h.name DESC;