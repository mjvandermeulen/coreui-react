import React, { ElementType, forwardRef, HTMLAttributes } from 'react'
import classNames from 'classnames'

export interface CCardSubtitleProps extends HTMLAttributes<HTMLHeadingElement> {
  /**
   * A string of all className you want applied to the component. [docs]
   */
  className?: string
  /**
   * Component used for the root node. Either a string to use a HTML element or a component. [docs]
   *
   * @default 'h6'
   */
  component?: string | ElementType
}
export const CCardSubtitle = forwardRef<HTMLHeadingElement, CCardSubtitleProps>(
  ({ children, component: Component = 'h6', className, ...rest }, ref) => {
    const _className = classNames('card-subtitle', className)

    return (
      <Component className={_className} {...rest} ref={ref}>
        {children}
      </Component>
    )
  },
)

CCardSubtitle.displayName = 'CCardSubtitle'