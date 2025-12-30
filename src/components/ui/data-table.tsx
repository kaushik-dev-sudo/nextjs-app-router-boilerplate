"use client";

import * as React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";

// Column configuration type
export interface Column<T> {
  /** Unique key for the column (should match data property name) */
  key: keyof T | string;
  /** Header title to display */
  header: string;
  /** Optional width class (e.g., "w-[100px]") */
  width?: string;
  /** Text alignment */
  align?: "left" | "center" | "right";
  /** Custom render function for cell content */
  render?: (value: T[keyof T], row: T, index: number) => React.ReactNode;
}

// DataTable props
export interface DataTableProps<T> {
  /** Array of data to display */
  data: T[];
  /** Column configuration */
  columns: Column<T>[];
  /** Optional caption for the table */
  caption?: string;
  /** Show loading state */
  loading?: boolean;
  /** Message to show when no data */
  emptyMessage?: string;
  /** Additional class for the table container */
  className?: string;
  /** Callback when row is clicked */
  onRowClick?: (row: T, index: number) => void;
}

export function DataTable<T>({
  data,
  columns,
  caption,
  loading = false,
  emptyMessage = "No data available",
  className,
  onRowClick,
}: DataTableProps<T>) {
  // Get cell value using key (supports nested keys like "user.name")
  const getCellValue = (row: T, key: string): unknown => {
    const keys = key.split(".");
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let value: any = row;
    for (const k of keys) {
      if (value && typeof value === "object" && k in value) {
        value = value[k];
      } else {
        return undefined;
      }
    }
    return value;
  };

  // Loading skeleton
  if (loading) {
    return (
      <div className={cn("relative w-full overflow-auto", className)}>
        <Table>
          <TableHeader>
            <TableRow>
              {columns.map((column, index) => (
                <TableHead key={index} className={column.width}>
                  <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse w-20" />
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {[...Array(5)].map((_, rowIndex) => (
              <TableRow key={rowIndex}>
                {columns.map((_, colIndex) => (
                  <TableCell key={colIndex}>
                    <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    );
  }

  return (
    <div className={cn("relative w-full overflow-auto", className)}>
      <Table>
        {caption && <TableCaption>{caption}</TableCaption>}
        <TableHeader>
          <TableRow>
            {columns.map((column, index) => (
              <TableHead
                key={index}
                className={cn(
                  column.width,
                  column.align === "center" && "text-center",
                  column.align === "right" && "text-right"
                )}
              >
                {column.header}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.length === 0 ? (
            <TableRow>
              <TableCell
                colSpan={columns.length}
                className="h-24 text-center text-gray-500 dark:text-gray-400"
              >
                {emptyMessage}
              </TableCell>
            </TableRow>
          ) : (
            data.map((row, rowIndex) => (
              <TableRow
                key={rowIndex}
                onClick={() => onRowClick?.(row, rowIndex)}
                className={onRowClick ? "cursor-pointer" : ""}
              >
                {columns.map((column, colIndex) => {
                  const value = getCellValue(row, column.key as string);
                  return (
                    <TableCell
                      key={colIndex}
                      className={cn(
                        column.align === "center" && "text-center",
                        column.align === "right" && "text-right"
                      )}
                    >
                      {column.render
                        ? column.render(value as T[keyof T], row, rowIndex)
                        : (value as React.ReactNode) ?? "-"}
                    </TableCell>
                  );
                })}
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );
}

// ============================================
// Badge Component for status/role styling
// ============================================
export interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "success" | "warning" | "error" | "info" | "purple";
  className?: string;
}

export function Badge({ children, variant = "default", className }: BadgeProps) {
  const variants = {
    default: "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200",
    success: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
    warning: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200",
    error: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200",
    info: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
    purple: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}

