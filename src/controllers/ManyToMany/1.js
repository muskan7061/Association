const tbl_movies = await movies.create({ name: "zzz" });
// console.log({tbl_movies})
const tbl_actor = await actor.create({ name: "zzz" });
// console.log({tbl_actor})
const tbl_junction = await movie_Actor.create({
  tblMovieId: tbl_movies.id,
  tblActorId: tbl_actor.id,
  name: tbl_movies.name,
});