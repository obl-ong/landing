export default function handler(req, res) {
    res.send(JSON.stringify({
      subject: req.query.resource,
      links: [
        {
          rel: "http://openid.net/specs/connect/1.0/issuer",
          href: "https://admin.obl.ong"
        }
      ]
    });
}
