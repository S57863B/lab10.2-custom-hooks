# React Custom Hooks Lab

A React + TypeScript project, demonstrating the implementation of reusable custom hooks for pagination and input debouncing.
## Key Features

### 1. `usePagination` Hook
- **Dynamic Items-per-Page**: Real-time regulation of how many items appear on screen.
- **Boundary Safety**: Built-in logic to prevent out-of-bounds page navigation.
- **Auto-Reset**: Automatically returns to page 1 when the page size is changed.
- **Calculated Metadata**: Provides `startIndex`, `endIndex`, and `totalPages` for easy UI integration.

### 2. `useDebounce` Hook
- **Generic Type Support**: Works with strings, numbers, or objects using TypeScript generics.
- **Cleanup Logic**: Efficiently clears timers using `useEffect` cleanup to prevent memory leaks and unnecessary updates.
- **Search Optimization**: Perfect for delaying API calls until a user stops typing.

### 3. Minimalist Dark Theme
- **CSS Variables**: Easy-to-edit color palette (`--accent-color`, `--surface-color`).
- **Responsive Components**: Clean cards and inputs designed for focus.

## Project Structure

```text
src/
├── components/
│   ├── DebounceSearchDemo.tsx  # Interactive search UI
│   └── PaginationDemo.tsx      # Paginated list with size control
├── hooks/
│   ├── useDebounce.ts          # Logic for value debouncing
│   └── usePagination.ts        # Logic for pagination state
├── App.tsx                     # Main layout container
├── index.css                   # Global dark theme variables & styles
└── main.tsx                    # React DOM entry point