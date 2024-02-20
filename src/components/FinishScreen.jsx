function FinishScreen({ points, maxPoints }) {
    const percentage = (points / maxPoints) * 100;
    let emoji;

    if (percentage >= 100) {
        emoji = '🎉';
    } else if (percentage >= 75) {
        emoji = '👏';
    } else if (percentage >= 50) {
        emoji = '👍';
    } else if (percentage >= 25) {
        emoji = '👀';
    } else {
        emoji = '😭';
    }


    return (
        < >
            <p className="bg-primary rounded-full text-light text-center py-6 text-3xl font-medium mb-6 selection:bg-accent selection:text-primary">
                <span className="text-4xl mr-1">{emoji}</span>
                You scored: {points} / {maxPoints} ( {Math.ceil(percentage)}%)
            </p>
            <p className="text-2xl text-center mb-16">Highscore</p>
        </>
    )
}

export default FinishScreen
