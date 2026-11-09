# Type Alias vs Interface in TypeScript: Key Differences and When to Use Them

## Introduction

TypeScript provides two ways to define custom types: `type` aliases and `interface`. Both help developers describe the structure of data and make code easier to understand. Although they look similar, they have some important differences.

## Detailed Explanation

An `interface` is mainly used to describe the structure of an object. For example:

```ts
interface User {
    name: string;
    age: number;
}
```

A `type` alias can also describe an object:

```ts
type User = {
    name: string;
    age: number;
};
```

Both examples define the same object structure. However, a type alias is more flexible because it can represent primitive types, unions, tuples, and other combinations.

```ts
type ID = string | number;
type Status = "active" | "inactive";
```

Another difference is how they support extension. An interface can extend another interface using `extends`:

```ts
interface Admin extends User {
    role: string;
}
```

Types can combine existing types using the intersection operator (`&`):

```ts
type Admin = User & {
    role: string;
};
```

Interfaces also support declaration merging, meaning multiple declarations with the same name can be combined. Type aliases do not support this feature.

## Conclusion

Both `type` and `interface` are useful in TypeScript. I would generally choose `interface` for object structures that may need extension. I would choose `type` when defining unions, tuples, or more complex type combinations. Understanding their differences helps developers write clearer and more maintainable code.