# One Notification, Two Possibilities: Understanding Union and Intersection Types

### The Scenario

Suppose we are developing a notification system. Some users receive notifications through email, while others receive them through SMS. Both options have different required information.

This is where TypeScript's union (`|`) operator becomes useful.

### First, Define the Alternatives

```ts
type EmailNotification = {
    email: string;
    subject: string;
};

type SMSNotification = {
    phone: string;
    message: string;
};

type NotificationContent =
    | EmailNotification
    | SMSNotification;
```

The union means that a notification can follow either structure. It does not require both structures at once.

### Now, Add Something They Share

Every notification also needs an ID and a creation date. Instead of repeating these properties, we can create a shared type:

```ts
type TrackingInfo = {
    id: number;
    createdAt: Date;
};
```

Now comes the intersection (`&`) operator:

```ts
type Notification =
    NotificationContent & TrackingInfo;
```

The intersection combines requirements. A valid notification must contain the tracking information and satisfy one of the notification alternatives.

We can make the alternatives even clearer with a `channel` property:

```ts
type Notification =
    (
        | { channel: "email"; email: string }
        | { channel: "sms"; phone: string }
    ) & TrackingInfo;
```

Now TypeScript can distinguish the notification channel using its literal value.

### The Big Difference

Think of union as **choosing an alternative**, while intersection means **combining requirements**.

### Conclusion

Union and intersection types are useful tools for designing flexible data models. When used together, they help represent real application scenarios without sacrificing type safety.