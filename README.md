# Codecamp Exercise: TypeScript

## Learning Objectives

- Add type annotations to variables, function parameters, and return types
- Define and use interfaces and type aliases
- Use union types, literal types, and type narrowing
- Convert plain JavaScript files to TypeScript
- Use generics for reusable, type-safe functions
- Validate runtime data with Zod schemas

## Setup

1. **Fork** this repository and **clone** your fork
2. Install dependencies:
   ```bash
   pnpm install
   ```
3. Verify TypeScript is working:
   ```bash
   pnpm check
   ```

## Exercise Instructions

### Convert JavaScript to TypeScript

1. **Fork** this repository and **clone** your fork
2. This project contains JavaScript files in `src/` that need to be converted to TypeScript

#### Step 1: Basic Type Annotations (`src/types.ts`)
- Open `src/types.js` and rename it to `src/types.ts`
- Add type annotations to all variables and function signatures
- Define an `interface User` and `interface Project` based on the data shapes

#### Step 2: Functions (`src/utils.ts`)
- Rename `src/utils.js` to `src/utils.ts`
- Add parameter types and return types to all functions
- Use union types where functions accept multiple input types

#### Step 3: Array Operations (`src/data.ts`)
- Rename `src/data.js` to `src/data.ts`
- Type the array methods (`.map`, `.filter`, `.find`) with proper generics
- Use `readonly` arrays where data should not be mutated

#### Step 4: Zod Validation (`src/validation.ts`)
- Create a new file `src/validation.ts`
- Define Zod schemas for `User` and `Project`
- Write a `parseUser(data: unknown): User` function using `z.parse()`
- Handle validation errors gracefully

## Acceptance Criteria

- [ ] All `.js` files renamed to `.ts` and compile without errors
- [ ] `interface User` and `interface Project` defined with all required fields
- [ ] All functions have explicit parameter types and return types
- [ ] At least one use of union types and type narrowing
- [ ] Zod schemas validate `User` and `Project` data
- [ ] `npx tsc --noEmit` passes with zero errors

## File Structure

```
codecamp-exercise-typescript/
├── README.md
├── LICENSE
├── .gitignore
├── tsconfig.json
├── package.json
└── src/
    ├── types.js        # Rename to .ts and add types
    ├── utils.js        # Rename to .ts and add types
    └── data.js         # Rename to .ts and add types
```

## Tips

- Start with `interface` for object shapes — use `type` for unions and intersections
- Use `typeof` and `in` for type narrowing in conditionals
- `Zod` infers TypeScript types from schemas: `type User = z.infer<typeof userSchema>`
