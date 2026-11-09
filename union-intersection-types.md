# Combining Union and Intersection Types in TypeScript

## Introduction

TypeScript provides Union (`|`) and Intersection (`&`) types to combine existing types in different ways. A union allows a value to match one of several possible types, while an intersection combines multiple types into one. Using them together is useful when building flexible and reusable application data structures.

## Detailed Explanation

Imagine we are developing a notification system. A notification can be sent through email or SMS. We can represent these options using a union type:

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

Here, `NotificationContent` can represent either an email notification or an SMS notification.

Now suppose every notification also needs a unique ID and creation date. Instead of repeating these properties in both types, we can define a shared type:

```ts
type TrackingInfo = {
    id: number;
    createdAt: Date;
};

type Notification =
    NotificationContent & TrackingInfo;
```

The intersection operator (`&`) combines the selected notification structure with the shared tracking properties. Therefore, a valid notification must contain the properties required by one notification type and all properties from `TrackingInfo`.

We can use a discriminating property to make the alternatives easier to identify:

```ts
type Notification =
    (
        | { channel: "email"; email: string }
        | { channel: "sms"; phone: string }
    ) & TrackingInfo;
```

## Conclusion

Union and intersection types solve different problems. Union provides alternatives, while intersection combines requirements. Together, they help developers create flexible, reusable, and strongly typed application models.