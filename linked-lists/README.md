# Linked Lists
Linked Lists are a linear collection of elements that aren't organized in subsequent memory addresses.
The biggest motivation for this data structure is basically the effort in programming languages like C to expand an existent array.

The problem was the following:
An existing array needs to accept more elements but to do that it must be first copied into a new memory address where it could fit the
current array plus the new element.
That done the data was copied into the newly allocated memory space and the old one was free for further use.

With linked lists, the insertion and deletion of elements are trivial because they don't need to be located in adjacent memory slots.