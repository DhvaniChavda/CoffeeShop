import {APP_IMAGES} from 'src/assets/images';
import {Routes} from 'src/navigation/route';

export default {
  press_again: 'Press again to Exit App.',
  splash: {
    get_started: 'Get Started',
  },
  intro_slider: {
    intro1: 'Embrace coffee essence',
    intro2: 'Flavorful bean journey',
    intro3: 'Unlock bean secrets',
    desc: 'Lorem ipsum dolor sit amet consectetur. Vestibulum eget blandit mattis ',
    skip: 'Skip',
    register: 'Register',
    sign_in: 'Sign in',
  },
  login: {
    welcome: 'Welcome to Login',
    ph_email: 'E-mail Address',
    ph_password: 'Password',
    forgot_password: 'Forgot Password?',
    login_with: 'Or Login with',
    do_not_have_ac: 'Don’t have an account ?',
  },
  register: {
    register_your_account: 'Register your Account',
    ph_full_name: 'Full Name',
    ph_confirm_password: 'Confirm Password',
    register_with: 'Or Register with',
    already_have_ac: 'Already have an account ?',
    login: 'Login',
  },
  home: {
    good_morning: 'Good Morning!',
    name: 'Shahzaib',
    discount: 'Get 20% Discount On your First Order!',
    banner_desc:
      'Lorem ipsum dolor sit amet consectetur. Vestibulum eget blandit mattis ',
    ingredients: 'ingredients',
    size: (name: string) => `${name} Size.`,
    small: 'Small',
    medium: 'Medium',
    large: 'Large',
    add_to_cart: 'Add to cart',
  },
  profile: {
    profile: 'Profile',
    logout_title: 'Logout',
    logout_info: 'Are you sure you want to logout?',
    yes: 'Yes',
    no: 'No',
  },
  favorite: {
    favorite: 'Favorite',
    ph_search: 'Search Your Favorite Product',
  },
  my_order: {
    qty: 'Qty',
    in_progress: 'In progress',
    delivered: 'Delivered',
    track: 'Track',
    complete: 'Complete',
  },
  cart: {
    cart: 'Cart',
    my_order: 'My Order',
    you_have: (item: number) => `You have ${item} items in your cart`,
    sub_total: 'Sub-total',
    shipping: 'Shipping',
    total: 'Total',
    apply: 'Apply',
    ph_coupon: 'Enter Coupan Code here',
    finalize_order: 'Finalize Order',
    price: (price: number) => `$${price}`,
    remove_title: 'Remove from Cart?',
    remove_info:
      'Lorem ipsum dolor sit amet consectetur. Vestibulum eget blandit mattis ',
  },
  privacy_policy: {
    tnc: 'Terms & Conditions ',
    desc: `Lorem ipsum dolor sit amet consectetur. Consequat tempus velit tempor eros. Orci egestas pharetra at pharetra lobortis at. Morbi sagittis dui orci quis arcu massa pellentesque libero euismod. Erat laoreet sit mi dictumst ultrices amet. Elementum in commodo scelerisque non in.
    Pulvinar tortor ac aliquam tortor enim. Volutpat aliquam ut purus nibh quisque amet ut morbi. Sed eget auctor quis nibh mattis feugiat tincidunt ridiculus accumsan. Nisl fermentum nulla mattis elementum condimentum leo massa. Potenti leo feugiat orci at scelerisque lacus nibh. Egestas cras sem vestibulum maecenas massa pulvinar rhoncus pharetra arcu. Turpis quam non praesent dictum et arcu ultrices sed.
    Pulvinar tortor ac aliquam tortor enim. Volutpat aliquam ut purus nibh quisque amet ut morbi. Sed eget auctor quis nibh mattis feugiat tincidunt ridiculus accumsan. Nisl fermentum nulla mattis elementum condimentum leo massa. Potenti leo feugiat orci at scelerisque lacus nibh. Egestas cras sem vestibulum maecenas massa pulvinar rhoncus pharetra arcu. Turpis quam non praesent dictum et arcu ultrices sed.
    Lorem ipsum dolor sit amet consectetur. Consequat tempus velit tempor eros. Orci egestas pharetra at pharetra lobortis at. Morbi sagittis dui orci quis arcu massa pellentesque libero euismod. Erat laoreet sit mi dictumst ultrices amet. Elementum in commodo scelerisque non in.
    Pulvinar tortor ac aliquam tortor enim. Volutpat aliquam ut purus nibh quisque amet ut morbi. Sed eget auctor quis nibh mattis feugiat tincidunt ridiculus accumsan. Nisl fermentum nulla mattis elementum condimentum leo massa. Potenti leo feugiat orci at scelerisque lacus nibh. Egestas cras sem vestibulum maecenas massa pulvinar rhoncus pharetra arcu. Turpis quam non praesent dictum et arcu ultrices sed.
    Pulvinar tortor ac aliquam tortor enim. Volutpat aliquam ut purus nibh quisque amet ut morbi. Sed eget auctor quis nibh mattis feugiat tincidunt ridiculus accumsan. Nisl fermentum nulla mattis elementum condimentum leo massa. Potenti leo feugiat orci at scelerisque lacus nibh. Egestas cras sem vestibulum maecenas massa pulvinar rhoncus pharetra arcu. Turpis quam non praesent dictum et arcu ultrices sedLorem ipsum dolor sit amet consectetur. Consequat tempus velit tempor eros. Orci egestas pharetra at pharetra lobortis at. Morbi sagittis dui orci quis arcu massa pellentesque libero euismod. Erat laoreet sit mi dictumst ultrices amet. Elementum in commodo scelerisque non in.
    Pulvinar tortor ac aliquam tortor enim. Volutpat aliquam ut purus nibh quisque amet ut morbi. Sed eget auctor quis nibh mattis feugiat tincidunt ridiculus accumsan. Nisl fermentum nulla mattis elementum condimentum leo massa. Potenti leo feugiat orci at scelerisque lacus nibh. Egestas cras sem vestibulum maecenas massa pulvinar rhoncus pharetra arcu. Turpis quam non praesent dictum et arcu ultrices sed.
    Pulvinar tortor ac aliquam tortor enim. Volutpat aliquam ut purus nibh quisque amet ut morbi. Sed eget auctor quis nibh mattis feugiat tincidunt ridiculus accumsan. Nisl fermentum nulla mattis elementum condimentum leo massa. Potenti leo feugiat orci at scelerisque lacus nibh. Egestas cras sem vestibulum maecenas massa pulvinar rhoncus pharetra arcu. Turpis quam non praesent dictum et arcu ultrices sedLorem ipsum dolor sit amet consectetur. Consequat tempus velit tempor eros. Orci egestas pharetra at pharetra lobortis at. Morbi sagittis dui orci quis arcu massa pellentesque libero euismod. Erat laoreet sit mi dictumst ultrices amet. Elementum in commodo scelerisque non in.
    Pulvinar tortor ac aliquam tortor enim. Volutpat aliquam ut purus nibh quisque amet ut morbi. Sed eget auctor quis nibh mattis feugiat tincidunt ridiculus accumsan. Nisl fermentum nulla mattis elementum condimentum leo massa. Potenti leo feugiat orci at scelerisque lacus nibh. Egestas cras sem vestibulum maecenas massa pulvinar rhoncus pharetra arcu. Turpis quam non praesent dictum et arcu ultrices sed.
    Pulvinar tortor ac aliquam tortor enim. Volutpat aliquam ut purus nibh quisque amet ut morbi. Sed eget auctor quis nibh mattis feugiat tincidunt ridiculus accumsan. Nisl fermentum nulla mattis elementum condimentum leo massa. Potenti leo feugiat orci at scelerisque lacus nibh. Egestas cras sem vestibulum maecenas massa pulvinar rhoncus pharetra arcu. Turpis quam non praesent dictum et arcu ultrices sedLorem ipsum dolor sit amet consectetur. Consequat tempus velit tempor eros. Orci egestas pharetra at pharetra lobortis at. Morbi sagittis dui orci quis arcu massa pellentesque libero euismod. Erat laoreet sit mi dictumst ultrices amet. Elementum in commodo scelerisque non in.
    Pulvinar tortor ac aliquam tortor enim. Volutpat aliquam ut purus nibh quisque amet ut morbi. Sed eget auctor quis nibh mattis feugiat tincidunt ridiculus accumsan. Nisl fermentum nulla mattis elementum condimentum leo massa. Potenti leo feugiat orci at scelerisque lacus nibh. Egestas cras sem vestibulum maecenas massa pulvinar rhoncus pharetra arcu. Turpis quam non praesent dictum et arcu ultrices sed.
    Pulvinar tortor ac aliquam tortor enim. Volutpat aliquam ut purus nibh quisque amet ut morbi. Sed eget auctor quis nibh mattis feugiat tincidunt ridiculus accumsan. Nisl fermentum nulla mattis elementum condimentum leo massa. Potenti leo feugiat orci at scelerisque lacus nibh. Egestas cras sem vestibulum maecenas massa pulvinar rhoncus pharetra arcu. Turpis quam non praesent dictum et arcu ultrices sedLorem ipsum dolor sit amet consectetur. Consequat tempus velit tempor eros. Orci egestas pharetra at pharetra lobortis at. Morbi sagittis dui orci quis arcu massa pellentesque libero euismod. Erat laoreet sit mi dictumst ultrices amet. Elementum in commodo scelerisque non in.
    Pulvinar tortor ac aliquam tortor enim. Volutpat aliquam ut purus nibh quisque amet ut morbi. Sed eget auctor quis nibh mattis feugiat tincidunt ridiculus accumsan. Nisl fermentum nulla mattis elementum condimentum leo massa. Potenti leo feugiat orci at scelerisque lacus nibh. Egestas cras sem vestibulum maecenas massa pulvinar rhoncus pharetra arcu. Turpis quam non praesent dictum et arcu ultrices sed.
    Pulvinar tortor ac aliquam tortor enim. Volutpat aliquam ut purus nibh quisque amet ut morbi. Sed eget auctor quis nibh mattis feugiat tincidunt ridiculus accumsan. Nisl fermentum nulla mattis elementum condimentum leo massa. Potenti leo feugiat orci at scelerisque lacus nibh. Egestas cras sem vestibulum maecenas massa pulvinar rhoncus pharetra arcu. Turpis quam non praesent dictum et arcu ultrices sed
    `,
  },

  notification: {
    Notification: 'Notification',
    mark_all_read: 'Mark all read',
    today: 'Today',
    yesterday: 'Yesterday',
  },
  bottom_tab: [
    {
      id: 1,
      icon: APP_IMAGES.ic_home,
      route: Routes.Home,
      title: 'Home',
    },
    {
      id: 2,
      icon: APP_IMAGES.ic_cart,
      route: Routes.Cart,
      title: 'Cart',
    },
    {
      id: 3,
      icon: APP_IMAGES.ic_wishlist,
      route: Routes.Wishlist,
      title: 'Wishlist',
    },
    {
      id: 4,
      icon: APP_IMAGES.ic_profile,
      route: Routes.Profile,
      title: 'Profile',
    },
  ],
  profile_list: [
    {
      id: 1,
      name: 'Your Profile',
      route: '',
      icon: APP_IMAGES.ic_user,
    },
    {
      id: 2,
      name: 'My Orders',
      route: Routes.MyOrder,
      icon: APP_IMAGES.ic_order,
    },
    {
      id: 3,
      name: 'Settings',
      route: Routes.SettingScreen,
      icon: APP_IMAGES.ic_setting,
    },
    {
      id: 4,
      name: 'Privacy policy',
      route: Routes.PrivacyPolicy,
      icon: APP_IMAGES.ic_lock,
    },
    {
      id: 5,
      name: 'Invite Friend',
      route: Routes.InviteFriend,
      icon: APP_IMAGES.ic_user_plus,
    },
    {
      id: 6,
      name: 'Logout',
      route: '',
      icon: APP_IMAGES.ic_logout,
    },
  ],
  setting_list: [
    {
      id: 1,
      name: 'Notification setting',
      route: '',
      icon: APP_IMAGES.ic_notification_bg,
    },
    {
      id: 2,
      name: 'Password Manager',
      route: '',
      icon: APP_IMAGES.ic_lock_bg,
    },
    {
      id: 3,
      name: 'Delete Account',
      route: '',
      icon: APP_IMAGES.ic_wallet,
    },
  ],
  homeDetails: {
    name: 'Liberica Coffee',
    ingredients: 'Milk',
    order_size: 'small',
    qty: 5,
    price: 20,
  },
  checkout: {
    checkout: 'Checkout',
    deliver_address: 'Deliver Address',
    home: 'Home',
    add_payment: 'Add Payment Method',
    add_card: 'Add Card',
    product_list: 'Product List',
    continue_payment: 'Continue Payment',
    Change: 'Change',
    add: 'Add',
  },
  payment: {
    payment_successful: 'Payment Successful',
    payment_info: 'Thank you for your purchase',
    track_order: 'Track Order',
  },
  track: {
    track_order: 'Track Order',
    estimated: 'Estimated Delivery time',
    delivery_time: (time: number) => `${time} min`,
    order_placed: 'Order placed',
    in_progress: 'In Progress',
    on_your_way: 'On Your way',
    deliverd: 'Deliverd',
    chat_with_rider: 'Chat with Rider',
  },
};
