"use client"

import { create } from "zustand"
import { persist } from "zustand/middleware"

interface User {
  id: string
  name: string
  email: string
  avatar?: string
  role: "student" | "adult" | "parent" | "elderly"
  preferences: {
    notifications: boolean
    theme: "light" | "dark"
    language: string
  }
  progress: {
    coursesCompleted: number
    challengesSolved: number
    totalPoints: number
    level: number
  }
}

interface CartItem {
  id: string
  name: string
  price: number
  quantity: number
  image: string
  category: string
}

interface Notification {
  id: string
  title: string
  message: string
  type: "info" | "success" | "warning" | "error"
  timestamp: Date
  read: boolean
}

interface AppState {
  // User Management
  user: User | null
  isAuthenticated: boolean
  login: (user: User) => void
  logout: () => void
  updateUser: (updates: Partial<User>) => void

  // Cart Management
  cart: CartItem[]
  addToCart: (item: Omit<CartItem, "quantity">) => void
  removeFromCart: (id: string) => void
  updateQuantity: (id: string, quantity: number) => void
  clearCart: () => void
  getCartTotal: () => number

  // Notifications
  notifications: Notification[]
  addNotification: (notification: Omit<Notification, "id" | "timestamp">) => void
  markAsRead: (id: string) => void
  clearNotifications: () => void
  getUnreadCount: () => number

  // Course Progress
  courseProgress: Record<string, number>
  updateCourseProgress: (courseId: string, progress: number) => void

  // Wishlist
  wishlist: string[]
  addToWishlist: (itemId: string) => void
  removeFromWishlist: (itemId: string) => void
}

export const useStore = create<AppState>()(
  persist(
    (set, get) => ({
      // User Management
      user: null,
      isAuthenticated: false,
      login: (user) => set({ user, isAuthenticated: true }),
      logout: () => set({ user: null, isAuthenticated: false, cart: [], notifications: [] }),
      updateUser: (updates) =>
        set((state) => ({
          user: state.user ? { ...state.user, ...updates } : null,
        })),

      // Cart Management
      cart: [],
      addToCart: (item) =>
        set((state) => {
          const existingItem = state.cart.find((cartItem) => cartItem.id === item.id)
          if (existingItem) {
            return {
              cart: state.cart.map((cartItem) =>
                cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem,
              ),
            }
          }
          return { cart: [...state.cart, { ...item, quantity: 1 }] }
        }),
      removeFromCart: (id) =>
        set((state) => ({
          cart: state.cart.filter((item) => item.id !== id),
        })),
      updateQuantity: (id, quantity) =>
        set((state) => ({
          cart:
            quantity <= 0
              ? state.cart.filter((item) => item.id !== id)
              : state.cart.map((item) => (item.id === id ? { ...item, quantity } : item)),
        })),
      clearCart: () => set({ cart: [] }),
      getCartTotal: () => {
        const { cart } = get()
        return cart.reduce((total, item) => total + item.price * item.quantity, 0)
      },

      // Notifications
      notifications: [],
      addNotification: (notification) =>
        set((state) => ({
          notifications: [
            {
              ...notification,
              id: Date.now().toString(),
              timestamp: new Date(),
            },
            ...state.notifications,
          ],
        })),
      markAsRead: (id) =>
        set((state) => ({
          notifications: state.notifications.map((notif) => (notif.id === id ? { ...notif, read: true } : notif)),
        })),
      clearNotifications: () => set({ notifications: [] }),
      getUnreadCount: () => {
        const { notifications } = get()
        return notifications.filter((notif) => !notif.read).length
      },

      // Course Progress
      courseProgress: {},
      updateCourseProgress: (courseId, progress) =>
        set((state) => ({
          courseProgress: { ...state.courseProgress, [courseId]: progress },
        })),

      // Wishlist
      wishlist: [],
      addToWishlist: (itemId) =>
        set((state) => ({
          wishlist: state.wishlist.includes(itemId) ? state.wishlist : [...state.wishlist, itemId],
        })),
      removeFromWishlist: (itemId) =>
        set((state) => ({
          wishlist: state.wishlist.filter((id) => id !== itemId),
        })),
    }),
    {
      name: "everything-you-need-storage",
    },
  ),
)
