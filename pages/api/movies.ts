import { NextApiHandler } from "next";

const Movies: NextApiHandler = async (req, res) => {
  if (req.method === "GET") {
    const { token, paged, posts_per_page = 10 } = req.query;

    try {
      const getMovies = await fetch(
        `${process.env.WP_URL}/wp-json/herothemes/v1/movies?paged=${paged}&posts_per_page=${posts_per_page}`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      const getMoviesResponse = await getMovies.json();

      if (getMoviesResponse.success !== 1) {
        res
          .status(200)
          .json({ success: 0, message: getMoviesResponse.message });
        return;
      }

      res.status(200).json(getMoviesResponse);
    } catch (err) {
      console.error(err);
      res.status(500).json({
        success: 0,
        errorMessage: err,
      });
    }
  }
};

export default Movies;
