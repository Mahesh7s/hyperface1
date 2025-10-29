function deepClone(value) {
   if (value === null || typeof value !== "object") {
    return value;
  }

  if (Array.isArray(value)) {
    const newArr = [];
    for (let i = 0; i < value.length; i++) {
      newArr[i] = deepClone(value[i]);
    }
    return newArr;
  }

   const newObj = {};
  for (let key in value) {
    if (value.hasOwnProperty(key)) {
      newObj[key] = deepClone(value[key]);
    }
  }

  return newObj;
}
const original = {
  name: "Mahesh",
  skills: ["React", "Node", "JS"],
  address: {
    city: "Guntakal",
    pin: 515801,
  },
};

const cloned = deepClone(original);

// Modify clone
cloned.name = "Moka";
cloned.skills.push("Firebase");
cloned.address.city = "Anantapur";

console.log("Original:", original);
console.log("Cloned:", cloned);
