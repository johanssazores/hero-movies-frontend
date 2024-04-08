import { NextApiHandler } from "next";

const VerifyUser: NextApiHandler = async (req, res) => {
  if (req.method === "POST") {
    const { token } = req.body;

    try {
      const requestLogin = await fetch(
        `${process.env.WP_URL}/wp-json/herothemes/v1/verify-token`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      const responseLogin = await requestLogin.json();

      if (responseLogin.success !== 1) {
        res.status(200).json({ success: 0, message: responseLogin.message });
        return;
      }

      res.status(200).json(responseLogin);
    } catch (err) {
      console.error(err);
      res.status(500).json({
        success: 0,
        errorMessage: err,
      });
    }
  }
};

export default VerifyUser;
