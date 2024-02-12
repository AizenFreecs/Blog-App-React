<nav className="flex container">
             <Link to={"/"}>
              <div className="p-1 mr-4 ml-4 flex items-center">
              <img
                  src={blogIcon}
                  className="h-12 mr-3"
                  alt='App Icon'      
                  /> 
                <h2>Freecs Blog</h2>
                </div>
                </Link>
              
              <ul className='flex ml-auto align-middle py-2 mr-4'>
                {navItems.map((item) =>
                    item.active ? (
                        <li key={item.name}>
                        <button
                            onClick={() => navigate(item.slug)}
                            className="inline-block px-6 py-2 duration-200
                                    hover:bg-blue-100 rounded-full hover:shadow-lg transition  ease-in-out focus:outline-none"
                        >
                            {item.name}
                        </button>
                        </li>
                    ) : null
                    )}
              </ul>
              
          </nav>