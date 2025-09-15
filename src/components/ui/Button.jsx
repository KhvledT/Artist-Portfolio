import { cn } from '../../lib/utils';
import { buttonVariants } from '../../lib/button-variants';

const Button = ({ className, variant, size, ...props }) => {
  return (
    <button
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
};

export default Button;
