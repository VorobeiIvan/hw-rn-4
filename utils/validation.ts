export const validateName = (name: string): string | null => {
    if (!name) return "Ім'я є обов'язковим.";
    if (name.length < 2) return "Ім'я має містити щонайменше 2 символи.";
    if (!/^[a-zA-Zа-яА-ЯіІїЇєЄ' ]+$/.test(name)) return "Ім'я має містити лише літери.";
    return null;
  };

  export const validatePassword = (password: string): string | null => {
    if (!password) return "Пароль є обов'язковим.";
    if (password.length < 8) return "Пароль має містити щонайменше 8 символів.";
    if (!/[A-Z]/.test(password)) return "Пароль має містити хоча б одну велику літеру.";
    if (!/[a-z]/.test(password)) return "Пароль має містити хоча б одну малу літеру.";
    if (!/[0-9]/.test(password)) return "Пароль має містити хоча б одну цифру.";
    if (!/[!@#$%^&*]/.test(password)) return "Пароль має містити хоча б один спеціальний символ.";
    return null;
  };
  
  export const validateEmail = (email: string): string | null => {
    if (!email) return "Електронна пошта є обов'язковою.";
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) return "Введіть коректну електронну пошту.";
    return null;
  };
  
  export const validateLocation = (location: string): string | null => {
    if (!location) return "Локація є обов'язковою.";
    if (location.length < 3) return "Локація має містити щонайменше 3 символи.";
    return null;
  };
  
  export const validatePostTitle = (title: string): string | null => {
    if (!title) return "Назва поста є обов'язковою.";
    if (title.length < 5) return "Назва поста має містити щонайменше 5 символів.";
    return null;
  };
  
  export const validateMessage = (message: string): string | null => {
    if (!message) return "Поле повідомлення є обов'язковим.";
    if (message.length < 10) return "Повідомлення має містити щонайменше 10 символів.";
    return null;
  };
  