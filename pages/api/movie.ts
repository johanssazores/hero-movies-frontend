import { NextApiHandler } from "next";

const Movie: NextApiHandler = async (req, res) => {
  if (req.method === "GET") {
    const { token, id } = req.query;

    try {
      const getMovies = await fetch(
        `${process.env.WP_URL}/wp-json/herothemes/v1/movies/${id}}`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      const getMovieResponse = await getMovies.json();

      if (getMovieResponse.success !== 1) {
        res.status(200).json({ success: 0, message: getMovieResponse.message });
        return;
      }

      res.status(200).json(getMovieResponse);
    } catch (err) {
      console.error(err);
      res.status(500).json({
        success: 0,
        errorMessage: err,
      });
    }
  }
};

export default Movie;
