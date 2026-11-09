# Type or Interface? A TypeScript Developer's Everyday Decision

### A Small Design Decision That Matters

Imagine you are building a user management system. You need to describe what a user looks like. TypeScript gives you two options: `type` and `interface`.

At first, they may seem interchangeable.

### Same Goal, Different Strengths

An interface is commonly used to describe the shape of an object:

```ts
interface User {
    name: string;
    email: string;
}
```

A type alias can describe the same structure:

```ts
type User = {
    name: string;
    email: string;
};
```

So, why do we need both?

The difference becomes clearer when requirements grow. Interfaces can extend other interfaces:

```ts
interface Admin extends User {
    permissions: string[];
}
```

Type aliases can combine structures using intersection types:

```ts
type Admin = User & {
    permissions: string[];
};
```

However, `type` offers more than object structures. It can represent unions, primitive types, and tuples:

```ts
type UserId = string | number;
type AccountStatus = "active" | "blocked";
```

Another special feature of interfaces is declaration merging. Multiple interface declarations with the same name can be combined, while type aliases cannot be redeclared this way.

### My Practical Rule

I would choose `interface` when designing object contracts that may grow through extension. I would choose `type` when working with unions, intersections, or other advanced type combinations.

### Conclusion

There is no universal winner. The best choice depends on the structure and purpose of the data. Understanding both makes TypeScript code easier to organize and maintain.