# SOLID

* *Single Responsibility* principle

  > Every class should have only one reason to change

  > Every module, class or function in a computer program should have responsibility over a single part of that program's functionality, and it should encapsulate that part. All of that module, class or function's services should be narrowly aligned with that responsibility.

  * The primary value of software is to be easy to change
  * The secondary value of software is for it to work

  ```python
  class Employee:
    def calculate_pay # Policy (business rules)
    def save # Architecture (db)
    def describe # Operations (reports, formatting)
  ```

  * If we need to add a new report, we need to modify the module/class that houses the other responsibilities even if those did not change.
  * Coupling causes more coupling. Each responsibility will share with each other causing even more/tighter coupling
  * Coupling will mean that a bug will cause fragility in the whole system

  ```python
  class Employee:
    employee_data
    
  class EmployeePolicy:
    def calculate_pay
    
  class EmployeeGateway:
    def save
   
  class EmployeeReporter:
    def describe
    
  # hide implementations from actors
  # useful if use of the code needs to be easy and in one place
  # otherwise, if users of the code know where to find things, 
  # leave just ^
  class EmployeeFacade: 
    def calculate_pay
    def save
    def describe
  ```

* *Open Closed* principle

* *Liskov Substitution* principle

* *Interface Segregation* principle

* *Dependency Inversion* principle

## Component Cohesion principles

* *Release-Reuse Equivalency* principle
* *Common Closure* principle
* *Common Reuse* principle

## Component Coupling Principles

* *Acyclic Dependencies* principle
* *Stable Dependencies* principle
* *Stable Abstractions* principle