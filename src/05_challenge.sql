SELECT COUNT(*)
FROM room_amenities AS ra
INNER JOIN amenities AS a ON ra.amenity_id = a.id
WHERE a.single_bed > 0 AND a.breakfast = TRUE;
