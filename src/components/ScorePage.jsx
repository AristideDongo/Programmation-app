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
        <p className="text-xl font-semibold text-[#ff0000] text-center mt-4">
            Ne vous découragez pas, <span className="font-bold">{namePlayer}</span> ! <br />
            <a href="https://developer.mozilla.org/fr/" className="text-indigo-600 hover:underline" target="_blank" rel="noopener noreferrer"> Revoir les bases <br /> HTML, CSS & JavaScript sur MDN.</a>
        </p>
    ) : (
        <p className="text-lg text-green-600 text-center mt-4">
            Félicitations <span className="font-bold">{namePlayer}</span> ! Vous avez bien réussi, continuez comme ça !
        </p>
    );

    return (
        <div className="flex items-center justify-center mt-10 p-6">
            <div className="max-w-lg w-full bg-[#dee2ff] p-8 h-[320px] rounded-lg shadow-lg">
                <h2 className="text-3xl font-bold text-center text-accent mb-4">Quiz terminé !</h2>
                <p className="text-2xl text-gray-700 text-center mb-6">
                    <span className="font-bold text-[#02040f]"> {score} </span> sur 
                    <span className="font-bold text-black"> {totalQuestions}</span>.
                </p>
                {encouragementMessage}
                <div className="flex justify-center mt-6">
                    <button
                        onClick={() => navigate("/")} // Retourner à la page d'accueil
                        className="bg-[#09bc8a] text-white py-2 px-6 ml-4 rounded-full hover:bg-[#227e64] transition duration-300"
                    >
                        Recommencer le quiz
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ScorePage;
