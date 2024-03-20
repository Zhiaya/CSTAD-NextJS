import {
  Footer,
  FooterCopyright,
  FooterIcon,
  FooterLink,
  FooterLinkGroup,
  FooterTitle,
} from "flowbite-react";
import {
  BsDribbble,
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";

const brand = {
  img: "w-24 h-24",
};

export default function MyFooter() {
  return (
    <Footer className="bg-blue-800">
      <div className="w-full">
        <div className="grid w-full grid-cols-2 gap-8 px-6 py-8 md:grid-cols-4">
          <div className="ml-16">
            <Footer.Brand
              theme={brand}
              href="/"
              src="https://istad.co/resources/img/CSTAD_120.png"
            />
            <p className="w-48 my-8 text-white">
              Start your IT career with CSTAD
            </p>
          </div>
          <div>
            <FooterTitle className="text-white" title="Learn more" />
            <FooterLinkGroup col>
              <FooterLink className="text-white" href="#">
                Course
              </FooterLink>
              <FooterLink className="text-white" href="#">
                IT News
              </FooterLink>
              <FooterLink className="text-white" href="#">
                Job apportunity
              </FooterLink>
              <FooterLink className="text-white" href="#">
                Privacy Policy
              </FooterLink>
              <FooterLink className="text-white" href="#">
                FAQ
              </FooterLink>
            </FooterLinkGroup>
          </div>
          <div>
            <FooterTitle className="text-white" title="Conact Us" />
            <FooterLinkGroup col>
              <FooterLink className="text-white" href="#">
                <a href="#">(+855) 95-990-910</a>
              </FooterLink>
              <FooterLink className="text-white" href="#">
                <a href="#">(+855) 93-990-910</a>
              </FooterLink>
            </FooterLinkGroup>
          </div>
          <div>
            <FooterTitle className="text-white" title="Follow Us" />
            <FooterLinkGroup col>
              
            </FooterLinkGroup>
          </div>
        </div>
        <div className="w-full bg-blue-800 px-4 py-6 sm:flex sm:items-center sm:justify-between">
          <FooterCopyright
            className="text-white"
            href="#"
            by="Flowbite™"
            year={2022}
          />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <FooterIcon className="text-white" href="#" icon={BsFacebook} />
            <FooterIcon className="text-white" href="#" icon={BsInstagram} />
            <FooterIcon className="text-white" href="#" icon={BsTwitter} />
            <FooterIcon className="text-white" href="#" icon={BsGithub} />
            <FooterIcon className="text-white" href="#" icon={BsDribbble} />
          </div>
        </div>
      </div>
    </Footer>
  );
}
