import { NextApiHandler } from "next";

const LoginUser: NextApiHandler = async (req, res) => {
  if (req.method === "POST") {
    const { username, password } = req.body;

    try {
      const requestLogin = await fetch(
        `${process.env.WP_URL}/wp-json/herothemes/v1/login`,
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({
            username,
            password,
          }),
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

export default LoginUser;
