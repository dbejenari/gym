import Logo from '@/assets/Logo.png'

export const Footer = () => {
  return (
    <footer className="relative bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img src={Logo} alt="logo" />
          <p className="my-5">
            At Evogym, we believe in pushing your limits and achieving your
            fitness goals. Whether you're training for a marathon or just
            starting your fitness journey, we're here to support you every step
            of the way. Our mission is to empower individuals to lead healthier,
            more active lives.
          </p>
          <p>© Evogym All Rights Reserved.</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5">
            For inquiries, please reach out to us via email.
          </p>
          <p>bejenaridaniil@gmail.com</p>
        </div>
      </div>
    </footer>
  )
}
