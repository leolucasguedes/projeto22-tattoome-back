const newDeposition = () => {
  return {
    stars: 5,
    text: "melhor tatuadora que já conheci",
    username: "teste",
  };
};

const newDepositionMissingFields = () => {
  return {
    stars: 5,
    text: "melhor tatuadora que já conheci",
  };
};

const newBudget = () => {
  return {
    name: "teste",
    email: "teste@driven.com",
    number: "21999626248",
    description: "quero uma tattoo foda de dragão no ombro",
    size: "mais ou menos 10-15cm",
  };
};

const newBudgetMissingFields = () => {
  return {
    name: "teste",
    email: "teste@driven.com",
    number: "21999626248",
    size: "mais ou menos 10-15cm",
  };
};

export {
  newDeposition,
  newDepositionMissingFields,
  newBudget,
  newBudgetMissingFields,
};
