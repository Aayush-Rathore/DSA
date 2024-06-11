# Data Structures and Algorithms (DSA) Repository

Welcome to the Data Structures and Algorithms (DSA) repository! This repository contains implementations of fundamental data structures including Stack, Queue, Singly Linked List, and Doubly Linked List. These are essential for understanding and applying algorithmic concepts in computer science.

## Table of Contents

1. [Introduction](#introduction)
2. [Data Structures](#data-structures)
   - [Stack](#stack)
   - [Queue](#queue)
   - [Singly Linked List](#singly-linked-list)
   - [Doubly Linked List](#doubly-linked-list)
3. [Installation](#installation)
4. [Usage](#usage)
5. [Contributing](#contributing)
6. [License](#license)

## Introduction

This repository is intended for educational purposes, helping developers to understand and implement basic data structures in JavaScript. The code is well-documented and designed to be easy to follow.

## Data Structures

### Stack

A stack is a linear data structure that follows the Last In, First Out (LIFO) principle. It supports the following operations:

- **push(element)**: Adds an item to the top of the stack.
- **pop()**: Removes and returns the item from the top of the stack.
- **atTop()**: Returns the item at the top of the stack without removing it.
- **atBottom()**: Returns the item at the bottom of the stack.
- **isEmpty()**: Checks if the stack is empty.
- **clear()**: Empties the stack.
- **map(callback)**: Applies a callback function to each element of the stack.

The implementation of the stack can be found in the `Stack` class.

### Queue

A queue is a linear data structure that follows the First In, First Out (FIFO) principle. It supports the following operations:

- **push(element)**: Adds an item to the end of the queue.
- **pop()**: Removes and returns the item from the front of the queue.
- **atTop()**: Returns the item at the front of the queue without removing it.
- **atBottom()**: Returns the item at the end of the queue.
- **isEmpty()**: Checks if the queue is empty.
- **clear()**: Empties the queue.
- **map(callback)**: Applies a callback function to each element of the queue.

The implementation of the queue can be found in the `Queue` class.

### Singly Linked List

A singly linked list is a linear data structure where each element points to the next element in the sequence. It supports the following operations:

- **addFirst(data)**: Inserts an item at the beginning of the list.
- **addLast(data)**: Inserts an item at the end of the list.
- **deleteFirst()**: Removes the first item from the list.
- **deleteLast()**: Removes the last item from the list.
- **insertAfter(key, data)**: Inserts an item after a specified key.
- **insertBefore(key, data)**: Inserts an item before a specified key.
- **deleteWithKey(key)**: Deletes the first occurrence of the specified item from the list.
- **map(callback)**: Applies a callback function to each element of the list.
- **getNode(key)**: Returns the node with the specified key.
- **indexOf(key)**: Returns the index of the specified key.
- **includes(key)**: Checks if the specified key is in the list.
- **insertAfterNode(data, prevNode)**: Inserts an item after the specified node.
- **reverse()**: Reverses the list.
- **clear()**: Empties the list.

The implementation of the singly linked list can be found in the `LinkedList` class.

### Doubly Linked List

A doubly linked list is a linear data structure where each element points to both the next and the previous elements in the sequence. It supports the following operations:

- **addFirst(data)**: Inserts an item at the beginning of the list.
- **addLast(data)**: Inserts an item at the end of the list.
- **removeFirst()**: Removes the first item from the list.
- **map(callback)**: Applies a callback function to each element of the list.
- **clear()**: Empties the list.
- **getNodeWithKey(key)**: Returns the node with the specified key.
- **insertAfterNode(data, node)**: Inserts an item after the specified node.

The implementation of the doubly linked list can be found in the `DoubleLinkedList` class.

## Installation

To use the implementations provided in this repository, you can clone the repository using the following command:

```bash
git clone https://github.com/yourusername/dsa.git
```
