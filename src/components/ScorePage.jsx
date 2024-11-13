import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function ScorePage({ score, totalQuestions, nameplayer, currentLevel }) {
    const navigate = useNavigate();
    const [namePlayer, setNamePlayer] = useState(null);

    useEffect(() => {
        const data = localStorage.getItem('playerName');
        if (data) {
            setNamePlayer(data);
        }
    }, []);

    // Calcul de la moyenne
    const average = totalQuestions / 2; // La moyenne est la moitié du nombre de questions

    // Message d'encouragement si l'utilisateur est en dessous de la moyenne
    const encouragementMessage = score < average ? (
        <p className="text-lg md:text-xl font-semibold text-[#ff0000] text-center mt-4">
            Ne vous découragez pas, <span className="font-bold">{namePlayer}</span> ! <br />
            <a href="https://developer.mozilla.org/fr/" className="text-indigo-600 hover:underline" target="_blank" rel="noopener noreferrer"> Revoir les bases <br /> HTML, CSS & JavaScript sur MDN.</a>
        </p>
    ) : (
        <p className="text-lg md:text-xl text-green-600 text-center mt-4">
            Félicitations <span className="font-bold">{namePlayer}</span> ! Vous avez bien réussi, continuez comme ça !
        </p>
    );

    return (
        <div className="flex items-center justify-center mt-6 md:mt-10 p-4 md:p-6">
            <div className="max-w-sm md:max-w-lg w-full bg-[#dee2ff] p-6 md:p-8 h-auto md:h-[320px] rounded-lg shadow-lg">
                <h2 className="text-2xl md:text-3xl font-bold text-center text-accent mb-4">Quiz terminé !</h2>
                <p className="text-xl md:text-2xl text-gray-700 text-center mb-4 md:mb-6">
                    <span className="font-bold text-[#02040f]"> {score} </span> sur 
                    <span className="font-bold text-black"> {totalQuestions}</span>.
                </p>
                {encouragementMessage}
                <div className="flex justify-center mt-4 md:mt-6">
                    <button
                        onClick={() => navigate("/")} // Retourner à la page d'accueil
                        className="bg-[#09bc8a] text-white py-2 px-4 md:px-6 rounded-full hover:bg-[#227e64] transition duration-300"
                    >
                        Retour à l'accueil
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ScorePage;
