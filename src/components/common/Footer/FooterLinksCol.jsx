import { Link } from "react-router";

function FooterLinksCol({ id, title, links }) {
  return (
    <div key={id}>
      <span className="font-IRANSansX-Bold text-sm text-white block mb-6 select-none">
        {title}
      </span>
      <ul className="footer-list">
        {links.map((link) =>
          link.info ? (
            <li key={link.id} className="footer-item">
              <p>
                {link.label}
                <Link dir="ltr" className="text-primary mr-2" to={link.href}>
                  {link.info}
                </Link>
              </p>
            </li>
          ) : (
            <li key={link.id} className="footer-item">
              <Link to={link.href}>{link.label}</Link>
            </li>
          ),
        )}
      </ul>
    </div>
  );
}

export default FooterLinksCol;
