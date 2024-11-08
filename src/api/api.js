const apiKeyOSGetGoodList = "011ba11bdcad4fa396660c2ec447ef14";
const methodNameOSGetGoodList = "OSGetGoodList";

export const fetchGetGoodList = async () => {
    const url = `https://sycret.ru/service/api/api?MethodName=${methodNameOSGetGoodList}&ApiKey=${apiKeyOSGetGoodList}`;
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Сетевая ошибка: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Ошибка:', error);
    }
};

const apiKeyOSSale = "011ba11bdcad4fa396660c2ec447ef14";
const methodNameOSSale = "OSSale";

export const fetchOSSale = async (formData) => {
  try {
    const response = await fetch(`https://sycret.ru/service/api/api?MethodName=${methodNameOSSale}&ApiKey=${apiKeyOSSale}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });

    if (!response.ok) {
      throw new Error(`Сетевая ошибка: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Ошибка:', error);
  }
};