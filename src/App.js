import React, { useMemo } from 'react';

const MyComponent = () => {
  const expensiveCalculation = () => {
    // Здесь может быть сложная и затратная операция
    console.log("Expensive calcularion");
    return 52341 + 3432;
  };

  const result = useMemo(() => {
    return expensiveCalculation();
  }, []);

  return (
    <div>
      <h1>Result: {result}</h1>
    </div>
  );
};

export default MyComponent;
//В этом примере мы используем хук `useMemo` для выполнения сложной и затратной операции `expensiveCalculation` только в том случае, если изменились зависимости. При первом рендере компонента результат вычисления будет сохранен и не будет пересчитываться при последующих рендерах, пока зависимости не изменятся.