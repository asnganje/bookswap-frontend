const Footer = () => {
  const date = new Date().getFullYear()
  return(
    <footer className="bg-gray-900 border-t border-white/10 text-white">
      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between">
        <p className="text-muted text-sm">
          &copy; {date} Nganje. All rights reserved. 
        </p>
        <p className="text-muted text-sm mt-4 md:mt-0">
          Built with care for readers.
        </p>
      </div>
    </footer>
  )
}

export default Footer;