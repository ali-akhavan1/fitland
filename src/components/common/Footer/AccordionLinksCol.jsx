import { Link } from "react-router";

import { ArrowCircleDown } from "iconsax-reactjs";

import Accordion from "@/components/ui/Accordion/Accordion";

function AccordionLinksCol({ id, title, links }) {
  return (
    <Accordion
      key={id}
      title={title}
      headerClass="pb-4"
      bodyClass="pb-4"
      Icon={<ArrowCircleDown />}
    >
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
              <p>{link.label}</p>
            </li>
          ),
        )}
      </ul>
    </Accordion>
  );
}

export default AccordionLinksCol;
