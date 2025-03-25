import React from "react";

const Nav = () => {
    return (
        <nav className="bg-gray-800 text-white">
            <div className="container mx-auto flex justify-between items-center p-4">
                <div className="text-lg font-bold">MyApp</div>
                <ul className="flex space-x-4">
                    <li>
                        <a href="/" className="hover:text-gray-200">
                            Calculadora
                        </a>
                    </li>
                    <li>
                        <a href="/registroEstud" className="hover:text-gray-200">
                            RegistroEstud
                        </a>
                    </li>
                    <li>
                        <a href="/todo" className="hover:text-gray-200">
                            TodoList
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Nav;