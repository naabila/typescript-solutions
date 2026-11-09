# Union and Intersection Types in TypeScript
### Building Flexible Data Structures with `|` and `&`

**Introduction**

Real-world applications rarely have data that follows only one fixed structure. Sometimes a value can have different possible shapes. Other times, an object needs to satisfy multiple requirements simultaneously. TypeScript solves these situations with Union and Intersection types.

## 1. Union: One of Several Possibilities

The Union operator (`|`) allows a value to match one of several types.

Consider a notification system that supports email and SMS:

```ts
type Email = {
    email: string;
    subject: string;
};

type SMS = {
    phone: string;
    message: string;
};

type NotificationContent = Email | SMS;
```

Here, `NotificationContent` can represent either an email or an SMS structure.

## 2. Intersection: Combining Requirements

The Intersection operator (`&`) combines multiple types. The resulting value must satisfy all combined requirements.

```ts
type Tracking = {
    id: number;
    createdAt: Date;
};

type EmailNotification = Email & Tracking;
```

Now an `EmailNotification` must contain the email properties as well as the tracking properties.

## 3. Using Both Together

We can combine the two approaches:

```ts
type Notification =
    (Email | SMS) & Tracking;
```

This means a notification must satisfy the tracking requirements and must also follow either the email or SMS structure.

For example, a valid email notification could look like this:

```ts
const notification: Notification = {
    email: "user@example.com",
    subject: "Welcome",
    id: 101,
    createdAt: new Date()
};
```

## 4. Quick Comparison

| Union (`|`) | Intersection (`&`) |
|---|---|
| Represents alternatives | Combines requirements |
| Either compatible type | All combined types |
| Useful for different data shapes | Useful for shared properties |

**Final Thought**

Union and Intersection types help developers model real application requirements more accurately. Understanding when to use alternatives and when to combine requirements is an important part of writing reliable TypeScript code.