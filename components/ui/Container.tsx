import type { HTMLAttributes, ElementType } from 'react'
import clsx from 'clsx'

type ContainerProps<T extends ElementType = 'div'> = HTMLAttributes<HTMLElement> & {
  as?: T
}

export function Container<T extends ElementType = 'div'>({
  as,
  className,
  children,
  ...props
}: ContainerProps<T>) {
  const Tag = (as ?? 'div') as ElementType
  return (
    <Tag
      className={clsx('mx-auto w-full max-w-[1400px] px-6 lg:px-8', className)}
      {...props}
    >
      {children}
    </Tag>
  )
}
