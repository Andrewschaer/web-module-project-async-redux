const initialState = {
    correctTotal: 0,
    incorrectTotal: 0,
    activeStreak: 0,
    activeCategory: null,
    userHistory: [],
    triviaQ: {
        category: null,
        question: null,
        correct_answer: null
    },
    userAnswer: null,
    isFetching: false,
    error: ''
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};