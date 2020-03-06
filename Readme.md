# Factory Pattern 
### *Delegate object creation at runtime*
___

## Creational Design Pattern


## ⚡️Problem idea 
Create different characters in our game
___

## 💡Intent
- Define an interface for creating an object, but let subclasses decide which class to instantiate
- It lets a class defer instantiation to subclasses
___
## 🔧 Apply when
- Class can't expect the type of object it must create
- Subclass must decide what types of objects are create
___
## ✅Pro
- Delegate object creation
- Hook for subclasses
- Base class can provide a default implementation

___

## 🏆 Great for
- Delegate object creation at runtime
- When we don't know what type of class we need to create