import { sayHello } from "@/utils/thing";

interface User {
    name: string;
    age: number;
}

const user: User = {
    name: "John",
    age: 30,
};

console.log(sayHello());
