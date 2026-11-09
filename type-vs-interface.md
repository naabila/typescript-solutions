# Type vs Interface in TypeScript
### Two Ways to Define Types, One Important Decision

**Introduction**

One common question TypeScript developers face is: Should I use `type` or `interface`? Both can describe object structures, but they are not exactly the same. Choosing the right one can make a codebase easier to maintain and extend.

## 1. The Similarity

Both can define the structure of an object.

```ts
interface User {
    name: string;
    age: number;
}

type Customer = {
    name: string;
    age: number;
};
```

Both definitions allow us to create objects with the required properties.

## 2. Where They Differ

| Feature | Type | Interface |
|---|---|---|
| Object structure | Yes | Yes |
| Union types | Yes | No |
| Intersection | Yes, with `&` | Can extend interfaces |
| Extending | With `&` | With `extends` |
| Declaration merging | No | Yes |

## 3. A Practical Example

Suppose an application has different user roles. A type alias can represent multiple possible values:

```ts
type Role = "admin" | "editor" | "user";
```

However, when defining an object contract that another interface can extend, an interface is a natural choice:

```ts
interface User {
    name: string;
}

interface Admin extends User {
    permissions: string[];
}
```

One special feature of interfaces is declaration merging. Multiple declarations with the same interface name can be combined automatically.

## 4. Which One Should We Choose?

My general approach is to use interfaces for object-oriented structures and extensible object contracts. I prefer type aliases for unions, intersections, tuples, and more complex type expressions.

**Final Thought**

Neither option is universally better. The important thing is understanding what each offers and choosing the one that makes the code easier to understand and maintain.