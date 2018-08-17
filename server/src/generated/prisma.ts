import { GraphQLResolveInfo, GraphQLSchema } from 'graphql'
import { IResolvers } from 'graphql-tools/dist/Interfaces'
import { Options } from 'graphql-binding'
import { makePrismaBindingClass, BasePrismaOptions } from 'prisma-binding'

export interface Query {
    pictures: <T = Picture[]>(args: { where?: PictureWhereInput, orderBy?: PictureOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    categories: <T = Category[]>(args: { where?: CategoryWhereInput, orderBy?: CategoryOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    posts: <T = Post[]>(args: { where?: PostWhereInput, orderBy?: PostOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    statusUpdates: <T = StatusUpdate[]>(args: { where?: StatusUpdateWhereInput, orderBy?: StatusUpdateOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    reminders: <T = Reminder[]>(args: { where?: ReminderWhereInput, orderBy?: ReminderOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    events: <T = Event[]>(args: { where?: EventWhereInput, orderBy?: EventOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    messages: <T = Message[]>(args: { where?: MessageWhereInput, orderBy?: MessageOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    notifications: <T = Notification[]>(args: { where?: NotificationWhereInput, orderBy?: NotificationOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    payments: <T = Payment[]>(args: { where?: PaymentWhereInput, orderBy?: PaymentOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    paymentAccounts: <T = PaymentAccount[]>(args: { where?: PaymentAccountWhereInput, orderBy?: PaymentAccountOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    paypalInformations: <T = PaypalInformation[]>(args: { where?: PaypalInformationWhereInput, orderBy?: PaypalInformationOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    creditCardInformations: <T = CreditCardInformation[]>(args: { where?: CreditCardInformationWhereInput, orderBy?: CreditCardInformationOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    priorities: <T = Priority[]>(args: { where?: PriorityWhereInput, orderBy?: PriorityOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    cities: <T = City[]>(args: { where?: CityWhereInput, orderBy?: CityOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    tasks: <T = Task[]>(args: { where?: TaskWhereInput, orderBy?: TaskOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    tags: <T = Tag[]>(args: { where?: TagWhereInput, orderBy?: TagOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    users: <T = User[]>(args: { where?: UserWhereInput, orderBy?: UserOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    locations: <T = Location[]>(args: { where?: LocationWhereInput, orderBy?: LocationOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    files: <T = File[]>(args: { where?: FileWhereInput, orderBy?: FileOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    category: <T = Category | null>(args: { where: CategoryWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    post: <T = Post | null>(args: { where: PostWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    statusUpdate: <T = StatusUpdate | null>(args: { where: StatusUpdateWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    reminder: <T = Reminder | null>(args: { where: ReminderWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    event: <T = Event | null>(args: { where: EventWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    message: <T = Message | null>(args: { where: MessageWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    notification: <T = Notification | null>(args: { where: NotificationWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    payment: <T = Payment | null>(args: { where: PaymentWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    paymentAccount: <T = PaymentAccount | null>(args: { where: PaymentAccountWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    paypalInformation: <T = PaypalInformation | null>(args: { where: PaypalInformationWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    creditCardInformation: <T = CreditCardInformation | null>(args: { where: CreditCardInformationWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    priority: <T = Priority | null>(args: { where: PriorityWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    city: <T = City | null>(args: { where: CityWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    task: <T = Task | null>(args: { where: TaskWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    user: <T = User | null>(args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    location: <T = Location | null>(args: { where: LocationWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    file: <T = File | null>(args: { where: FileWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    picturesConnection: <T = PictureConnection>(args: { where?: PictureWhereInput, orderBy?: PictureOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    categoriesConnection: <T = CategoryConnection>(args: { where?: CategoryWhereInput, orderBy?: CategoryOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    postsConnection: <T = PostConnection>(args: { where?: PostWhereInput, orderBy?: PostOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    statusUpdatesConnection: <T = StatusUpdateConnection>(args: { where?: StatusUpdateWhereInput, orderBy?: StatusUpdateOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    remindersConnection: <T = ReminderConnection>(args: { where?: ReminderWhereInput, orderBy?: ReminderOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    eventsConnection: <T = EventConnection>(args: { where?: EventWhereInput, orderBy?: EventOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    messagesConnection: <T = MessageConnection>(args: { where?: MessageWhereInput, orderBy?: MessageOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    notificationsConnection: <T = NotificationConnection>(args: { where?: NotificationWhereInput, orderBy?: NotificationOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    paymentsConnection: <T = PaymentConnection>(args: { where?: PaymentWhereInput, orderBy?: PaymentOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    paymentAccountsConnection: <T = PaymentAccountConnection>(args: { where?: PaymentAccountWhereInput, orderBy?: PaymentAccountOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    paypalInformationsConnection: <T = PaypalInformationConnection>(args: { where?: PaypalInformationWhereInput, orderBy?: PaypalInformationOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    creditCardInformationsConnection: <T = CreditCardInformationConnection>(args: { where?: CreditCardInformationWhereInput, orderBy?: CreditCardInformationOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    prioritiesConnection: <T = PriorityConnection>(args: { where?: PriorityWhereInput, orderBy?: PriorityOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    citiesConnection: <T = CityConnection>(args: { where?: CityWhereInput, orderBy?: CityOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    tasksConnection: <T = TaskConnection>(args: { where?: TaskWhereInput, orderBy?: TaskOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    tagsConnection: <T = TagConnection>(args: { where?: TagWhereInput, orderBy?: TagOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    usersConnection: <T = UserConnection>(args: { where?: UserWhereInput, orderBy?: UserOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    locationsConnection: <T = LocationConnection>(args: { where?: LocationWhereInput, orderBy?: LocationOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    filesConnection: <T = FileConnection>(args: { where?: FileWhereInput, orderBy?: FileOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    node: <T = Node | null>(args: { id: ID_Output }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> 
  }

export interface Mutation {
    createPicture: <T = Picture>(args: { data: PictureCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createCategory: <T = Category>(args: { data: CategoryCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createPost: <T = Post>(args: { data: PostCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createStatusUpdate: <T = StatusUpdate>(args: { data: StatusUpdateCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createReminder: <T = Reminder>(args: { data: ReminderCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createEvent: <T = Event>(args: { data: EventCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createMessage: <T = Message>(args: { data: MessageCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createNotification: <T = Notification>(args: { data: NotificationCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createPayment: <T = Payment>(args: { data: PaymentCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createPaymentAccount: <T = PaymentAccount>(args: { data: PaymentAccountCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createPaypalInformation: <T = PaypalInformation>(args: { data: PaypalInformationCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createCreditCardInformation: <T = CreditCardInformation>(args: { data: CreditCardInformationCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createPriority: <T = Priority>(args: { data: PriorityCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createCity: <T = City>(args: { data: CityCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createTask: <T = Task>(args: { data: TaskCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createTag: <T = Tag>(args: { data: TagCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createUser: <T = User>(args: { data: UserCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createLocation: <T = Location>(args: { data: LocationCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createFile: <T = File>(args: { data: FileCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateCategory: <T = Category | null>(args: { data: CategoryUpdateInput, where: CategoryWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updatePost: <T = Post | null>(args: { data: PostUpdateInput, where: PostWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateStatusUpdate: <T = StatusUpdate | null>(args: { data: StatusUpdateUpdateInput, where: StatusUpdateWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateReminder: <T = Reminder | null>(args: { data: ReminderUpdateInput, where: ReminderWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateEvent: <T = Event | null>(args: { data: EventUpdateInput, where: EventWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateMessage: <T = Message | null>(args: { data: MessageUpdateInput, where: MessageWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateNotification: <T = Notification | null>(args: { data: NotificationUpdateInput, where: NotificationWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updatePayment: <T = Payment | null>(args: { data: PaymentUpdateInput, where: PaymentWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updatePaymentAccount: <T = PaymentAccount | null>(args: { data: PaymentAccountUpdateInput, where: PaymentAccountWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updatePaypalInformation: <T = PaypalInformation | null>(args: { data: PaypalInformationUpdateInput, where: PaypalInformationWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateCreditCardInformation: <T = CreditCardInformation | null>(args: { data: CreditCardInformationUpdateInput, where: CreditCardInformationWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updatePriority: <T = Priority | null>(args: { data: PriorityUpdateInput, where: PriorityWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateCity: <T = City | null>(args: { data: CityUpdateInput, where: CityWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateTask: <T = Task | null>(args: { data: TaskUpdateInput, where: TaskWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateUser: <T = User | null>(args: { data: UserUpdateInput, where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateLocation: <T = Location | null>(args: { data: LocationUpdateInput, where: LocationWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateFile: <T = File | null>(args: { data: FileUpdateInput, where: FileWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteCategory: <T = Category | null>(args: { where: CategoryWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deletePost: <T = Post | null>(args: { where: PostWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteStatusUpdate: <T = StatusUpdate | null>(args: { where: StatusUpdateWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteReminder: <T = Reminder | null>(args: { where: ReminderWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteEvent: <T = Event | null>(args: { where: EventWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteMessage: <T = Message | null>(args: { where: MessageWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteNotification: <T = Notification | null>(args: { where: NotificationWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deletePayment: <T = Payment | null>(args: { where: PaymentWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deletePaymentAccount: <T = PaymentAccount | null>(args: { where: PaymentAccountWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deletePaypalInformation: <T = PaypalInformation | null>(args: { where: PaypalInformationWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteCreditCardInformation: <T = CreditCardInformation | null>(args: { where: CreditCardInformationWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deletePriority: <T = Priority | null>(args: { where: PriorityWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteCity: <T = City | null>(args: { where: CityWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteTask: <T = Task | null>(args: { where: TaskWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteUser: <T = User | null>(args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteLocation: <T = Location | null>(args: { where: LocationWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteFile: <T = File | null>(args: { where: FileWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertCategory: <T = Category>(args: { where: CategoryWhereUniqueInput, create: CategoryCreateInput, update: CategoryUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertPost: <T = Post>(args: { where: PostWhereUniqueInput, create: PostCreateInput, update: PostUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertStatusUpdate: <T = StatusUpdate>(args: { where: StatusUpdateWhereUniqueInput, create: StatusUpdateCreateInput, update: StatusUpdateUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertReminder: <T = Reminder>(args: { where: ReminderWhereUniqueInput, create: ReminderCreateInput, update: ReminderUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertEvent: <T = Event>(args: { where: EventWhereUniqueInput, create: EventCreateInput, update: EventUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertMessage: <T = Message>(args: { where: MessageWhereUniqueInput, create: MessageCreateInput, update: MessageUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertNotification: <T = Notification>(args: { where: NotificationWhereUniqueInput, create: NotificationCreateInput, update: NotificationUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertPayment: <T = Payment>(args: { where: PaymentWhereUniqueInput, create: PaymentCreateInput, update: PaymentUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertPaymentAccount: <T = PaymentAccount>(args: { where: PaymentAccountWhereUniqueInput, create: PaymentAccountCreateInput, update: PaymentAccountUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertPaypalInformation: <T = PaypalInformation>(args: { where: PaypalInformationWhereUniqueInput, create: PaypalInformationCreateInput, update: PaypalInformationUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertCreditCardInformation: <T = CreditCardInformation>(args: { where: CreditCardInformationWhereUniqueInput, create: CreditCardInformationCreateInput, update: CreditCardInformationUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertPriority: <T = Priority>(args: { where: PriorityWhereUniqueInput, create: PriorityCreateInput, update: PriorityUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertCity: <T = City>(args: { where: CityWhereUniqueInput, create: CityCreateInput, update: CityUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertTask: <T = Task>(args: { where: TaskWhereUniqueInput, create: TaskCreateInput, update: TaskUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertUser: <T = User>(args: { where: UserWhereUniqueInput, create: UserCreateInput, update: UserUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertLocation: <T = Location>(args: { where: LocationWhereUniqueInput, create: LocationCreateInput, update: LocationUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertFile: <T = File>(args: { where: FileWhereUniqueInput, create: FileCreateInput, update: FileUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyPictures: <T = BatchPayload>(args: { data: PictureUpdateInput, where?: PictureWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyCategories: <T = BatchPayload>(args: { data: CategoryUpdateInput, where?: CategoryWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyPosts: <T = BatchPayload>(args: { data: PostUpdateInput, where?: PostWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyStatusUpdates: <T = BatchPayload>(args: { data: StatusUpdateUpdateInput, where?: StatusUpdateWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyReminders: <T = BatchPayload>(args: { data: ReminderUpdateInput, where?: ReminderWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyEvents: <T = BatchPayload>(args: { data: EventUpdateInput, where?: EventWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyMessages: <T = BatchPayload>(args: { data: MessageUpdateInput, where?: MessageWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyNotifications: <T = BatchPayload>(args: { data: NotificationUpdateInput, where?: NotificationWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyPayments: <T = BatchPayload>(args: { data: PaymentUpdateInput, where?: PaymentWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyPaymentAccounts: <T = BatchPayload>(args: { data: PaymentAccountUpdateInput, where?: PaymentAccountWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyPaypalInformations: <T = BatchPayload>(args: { data: PaypalInformationUpdateInput, where?: PaypalInformationWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyCreditCardInformations: <T = BatchPayload>(args: { data: CreditCardInformationUpdateInput, where?: CreditCardInformationWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyPriorities: <T = BatchPayload>(args: { data: PriorityUpdateInput, where?: PriorityWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyCities: <T = BatchPayload>(args: { data: CityUpdateInput, where?: CityWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyTasks: <T = BatchPayload>(args: { data: TaskUpdateInput, where?: TaskWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyTags: <T = BatchPayload>(args: { data: TagUpdateInput, where?: TagWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyUsers: <T = BatchPayload>(args: { data: UserUpdateInput, where?: UserWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyLocations: <T = BatchPayload>(args: { data: LocationUpdateInput, where?: LocationWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyFiles: <T = BatchPayload>(args: { data: FileUpdateInput, where?: FileWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyPictures: <T = BatchPayload>(args: { where?: PictureWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyCategories: <T = BatchPayload>(args: { where?: CategoryWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyPosts: <T = BatchPayload>(args: { where?: PostWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyStatusUpdates: <T = BatchPayload>(args: { where?: StatusUpdateWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyReminders: <T = BatchPayload>(args: { where?: ReminderWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyEvents: <T = BatchPayload>(args: { where?: EventWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyMessages: <T = BatchPayload>(args: { where?: MessageWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyNotifications: <T = BatchPayload>(args: { where?: NotificationWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyPayments: <T = BatchPayload>(args: { where?: PaymentWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyPaymentAccounts: <T = BatchPayload>(args: { where?: PaymentAccountWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyPaypalInformations: <T = BatchPayload>(args: { where?: PaypalInformationWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyCreditCardInformations: <T = BatchPayload>(args: { where?: CreditCardInformationWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyPriorities: <T = BatchPayload>(args: { where?: PriorityWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyCities: <T = BatchPayload>(args: { where?: CityWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyTasks: <T = BatchPayload>(args: { where?: TaskWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyTags: <T = BatchPayload>(args: { where?: TagWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyUsers: <T = BatchPayload>(args: { where?: UserWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyLocations: <T = BatchPayload>(args: { where?: LocationWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyFiles: <T = BatchPayload>(args: { where?: FileWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> 
  }

export interface Subscription {
    picture: <T = PictureSubscriptionPayload | null>(args: { where?: PictureSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    category: <T = CategorySubscriptionPayload | null>(args: { where?: CategorySubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    post: <T = PostSubscriptionPayload | null>(args: { where?: PostSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    statusUpdate: <T = StatusUpdateSubscriptionPayload | null>(args: { where?: StatusUpdateSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    reminder: <T = ReminderSubscriptionPayload | null>(args: { where?: ReminderSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    event: <T = EventSubscriptionPayload | null>(args: { where?: EventSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    message: <T = MessageSubscriptionPayload | null>(args: { where?: MessageSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    notification: <T = NotificationSubscriptionPayload | null>(args: { where?: NotificationSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    payment: <T = PaymentSubscriptionPayload | null>(args: { where?: PaymentSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    paymentAccount: <T = PaymentAccountSubscriptionPayload | null>(args: { where?: PaymentAccountSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    paypalInformation: <T = PaypalInformationSubscriptionPayload | null>(args: { where?: PaypalInformationSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    creditCardInformation: <T = CreditCardInformationSubscriptionPayload | null>(args: { where?: CreditCardInformationSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    priority: <T = PrioritySubscriptionPayload | null>(args: { where?: PrioritySubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    city: <T = CitySubscriptionPayload | null>(args: { where?: CitySubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    task: <T = TaskSubscriptionPayload | null>(args: { where?: TaskSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    tag: <T = TagSubscriptionPayload | null>(args: { where?: TagSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    user: <T = UserSubscriptionPayload | null>(args: { where?: UserSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    location: <T = LocationSubscriptionPayload | null>(args: { where?: LocationSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    file: <T = FileSubscriptionPayload | null>(args: { where?: FileSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> 
  }

export interface Exists {
  Picture: (where?: PictureWhereInput) => Promise<boolean>
  Category: (where?: CategoryWhereInput) => Promise<boolean>
  Post: (where?: PostWhereInput) => Promise<boolean>
  StatusUpdate: (where?: StatusUpdateWhereInput) => Promise<boolean>
  Reminder: (where?: ReminderWhereInput) => Promise<boolean>
  Event: (where?: EventWhereInput) => Promise<boolean>
  Message: (where?: MessageWhereInput) => Promise<boolean>
  Notification: (where?: NotificationWhereInput) => Promise<boolean>
  Payment: (where?: PaymentWhereInput) => Promise<boolean>
  PaymentAccount: (where?: PaymentAccountWhereInput) => Promise<boolean>
  PaypalInformation: (where?: PaypalInformationWhereInput) => Promise<boolean>
  CreditCardInformation: (where?: CreditCardInformationWhereInput) => Promise<boolean>
  Priority: (where?: PriorityWhereInput) => Promise<boolean>
  City: (where?: CityWhereInput) => Promise<boolean>
  Task: (where?: TaskWhereInput) => Promise<boolean>
  Tag: (where?: TagWhereInput) => Promise<boolean>
  User: (where?: UserWhereInput) => Promise<boolean>
  Location: (where?: LocationWhereInput) => Promise<boolean>
  File: (where?: FileWhereInput) => Promise<boolean>
}

export interface Prisma {
  query: Query
  mutation: Mutation
  subscription: Subscription
  exists: Exists
  request: <T = any>(query: string, variables?: {[key: string]: any}) => Promise<T>
  delegate(operation: 'query' | 'mutation', fieldName: string, args: {
    [key: string]: any;
}, infoOrQuery?: GraphQLResolveInfo | string, options?: Options): Promise<any>;
delegateSubscription(fieldName: string, args?: {
    [key: string]: any;
}, infoOrQuery?: GraphQLResolveInfo | string, options?: Options): Promise<AsyncIterator<any>>;
getAbstractResolvers(filterSchema?: GraphQLSchema | string): IResolvers;
}

export interface BindingConstructor<T> {
  new(options: BasePrismaOptions): T
}
/**
 * Type Defs
*/

const typeDefs = `type AggregateCategory {
  count: Int!
}

type AggregateCity {
  count: Int!
}

type AggregateCreditCardInformation {
  count: Int!
}

type AggregateEvent {
  count: Int!
}

type AggregateFile {
  count: Int!
}

type AggregateLocation {
  count: Int!
}

type AggregateMessage {
  count: Int!
}

type AggregateNotification {
  count: Int!
}

type AggregatePayment {
  count: Int!
}

type AggregatePaymentAccount {
  count: Int!
}

type AggregatePaypalInformation {
  count: Int!
}

type AggregatePicture {
  count: Int!
}

type AggregatePost {
  count: Int!
}

type AggregatePriority {
  count: Int!
}

type AggregateReminder {
  count: Int!
}

type AggregateStatusUpdate {
  count: Int!
}

type AggregateTag {
  count: Int!
}

type AggregateTask {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  """The number of nodes that have been affected by the Batch operation."""
  count: Long!
}

type Category implements Node {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  createdBy(where: UserWhereInput): User!
  name: String
  description: String
  tasks(where: TaskWhereInput, orderBy: TaskOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Task!]
}

"""A connection to a list of items."""
type CategoryConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [CategoryEdge]!
  aggregate: AggregateCategory!
}

input CategoryCreateInput {
  name: String
  description: String
  createdBy: UserCreateOneInput!
  tasks: TaskCreateManyWithoutCategoriesInput
}

input CategoryCreateManyWithoutTasksInput {
  create: [CategoryCreateWithoutTasksInput!]
  connect: [CategoryWhereUniqueInput!]
}

input CategoryCreateWithoutTasksInput {
  name: String
  description: String
  createdBy: UserCreateOneInput!
}

"""An edge in a connection."""
type CategoryEdge {
  """The item at the end of the edge."""
  node: Category!

  """A cursor for use in pagination."""
  cursor: String!
}

enum CategoryOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  name_ASC
  name_DESC
  description_ASC
  description_DESC
}

type CategoryPreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  name: String
  description: String
}

type CategorySubscriptionPayload {
  mutation: MutationType!
  node: Category
  updatedFields: [String!]
  previousValues: CategoryPreviousValues
}

input CategorySubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [CategorySubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [CategorySubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [CategorySubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: CategoryWhereInput
}

input CategoryUpdateInput {
  name: String
  description: String
  createdBy: UserUpdateOneInput
  tasks: TaskUpdateManyWithoutCategoriesInput
}

input CategoryUpdateManyWithoutTasksInput {
  create: [CategoryCreateWithoutTasksInput!]
  connect: [CategoryWhereUniqueInput!]
  disconnect: [CategoryWhereUniqueInput!]
  delete: [CategoryWhereUniqueInput!]
  update: [CategoryUpdateWithWhereUniqueWithoutTasksInput!]
  upsert: [CategoryUpsertWithWhereUniqueWithoutTasksInput!]
}

input CategoryUpdateWithoutTasksDataInput {
  name: String
  description: String
  createdBy: UserUpdateOneInput
}

input CategoryUpdateWithWhereUniqueWithoutTasksInput {
  where: CategoryWhereUniqueInput!
  data: CategoryUpdateWithoutTasksDataInput!
}

input CategoryUpsertWithWhereUniqueWithoutTasksInput {
  where: CategoryWhereUniqueInput!
  update: CategoryUpdateWithoutTasksDataInput!
  create: CategoryCreateWithoutTasksInput!
}

input CategoryWhereInput {
  """Logical AND on all given filters."""
  AND: [CategoryWhereInput!]

  """Logical OR on all given filters."""
  OR: [CategoryWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [CategoryWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  description: String

  """All values that are not equal to given value."""
  description_not: String

  """All values that are contained in given list."""
  description_in: [String!]

  """All values that are not contained in given list."""
  description_not_in: [String!]

  """All values less than the given value."""
  description_lt: String

  """All values less than or equal the given value."""
  description_lte: String

  """All values greater than the given value."""
  description_gt: String

  """All values greater than or equal the given value."""
  description_gte: String

  """All values containing the given string."""
  description_contains: String

  """All values not containing the given string."""
  description_not_contains: String

  """All values starting with the given string."""
  description_starts_with: String

  """All values not starting with the given string."""
  description_not_starts_with: String

  """All values ending with the given string."""
  description_ends_with: String

  """All values not ending with the given string."""
  description_not_ends_with: String
  createdBy: UserWhereInput
  tasks_every: TaskWhereInput
  tasks_some: TaskWhereInput
  tasks_none: TaskWhereInput
}

input CategoryWhereUniqueInput {
  id: ID
}

type City implements Node {
  id: ID!
  name: String!
}

"""A connection to a list of items."""
type CityConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [CityEdge]!
  aggregate: AggregateCity!
}

input CityCreateInput {
  name: String!
}

input CityCreateOneInput {
  create: CityCreateInput
  connect: CityWhereUniqueInput
}

"""An edge in a connection."""
type CityEdge {
  """The item at the end of the edge."""
  node: City!

  """A cursor for use in pagination."""
  cursor: String!
}

enum CityOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type CityPreviousValues {
  id: ID!
  name: String!
}

type CitySubscriptionPayload {
  mutation: MutationType!
  node: City
  updatedFields: [String!]
  previousValues: CityPreviousValues
}

input CitySubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [CitySubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [CitySubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [CitySubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: CityWhereInput
}

input CityUpdateDataInput {
  name: String
}

input CityUpdateInput {
  name: String
}

input CityUpdateOneInput {
  create: CityCreateInput
  connect: CityWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: CityUpdateDataInput
  upsert: CityUpsertNestedInput
}

input CityUpsertNestedInput {
  update: CityUpdateDataInput!
  create: CityCreateInput!
}

input CityWhereInput {
  """Logical AND on all given filters."""
  AND: [CityWhereInput!]

  """Logical OR on all given filters."""
  OR: [CityWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [CityWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
}

input CityWhereUniqueInput {
  id: ID
}

type CreditCardInformation implements Node {
  id: ID!
  createdAt: DateTime!
  cardNumber: String!
  expiresOnMonth: Int!
  expiresOnYear: Int!
  securityCode: String!
  firstName: String!
  lastName: String!
  postalCode: String!
  country: String!
  paymentAccount(where: PaymentAccountWhereInput): PaymentAccount
}

"""A connection to a list of items."""
type CreditCardInformationConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [CreditCardInformationEdge]!
  aggregate: AggregateCreditCardInformation!
}

input CreditCardInformationCreateInput {
  cardNumber: String!
  expiresOnMonth: Int!
  expiresOnYear: Int!
  securityCode: String!
  firstName: String!
  lastName: String!
  postalCode: String!
  country: String!
  paymentAccount: PaymentAccountCreateOneWithoutCreditcardInput
}

input CreditCardInformationCreateOneWithoutPaymentAccountInput {
  create: CreditCardInformationCreateWithoutPaymentAccountInput
  connect: CreditCardInformationWhereUniqueInput
}

input CreditCardInformationCreateWithoutPaymentAccountInput {
  cardNumber: String!
  expiresOnMonth: Int!
  expiresOnYear: Int!
  securityCode: String!
  firstName: String!
  lastName: String!
  postalCode: String!
  country: String!
}

"""An edge in a connection."""
type CreditCardInformationEdge {
  """The item at the end of the edge."""
  node: CreditCardInformation!

  """A cursor for use in pagination."""
  cursor: String!
}

enum CreditCardInformationOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  cardNumber_ASC
  cardNumber_DESC
  expiresOnMonth_ASC
  expiresOnMonth_DESC
  expiresOnYear_ASC
  expiresOnYear_DESC
  securityCode_ASC
  securityCode_DESC
  firstName_ASC
  firstName_DESC
  lastName_ASC
  lastName_DESC
  postalCode_ASC
  postalCode_DESC
  country_ASC
  country_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type CreditCardInformationPreviousValues {
  id: ID!
  createdAt: DateTime!
  cardNumber: String!
  expiresOnMonth: Int!
  expiresOnYear: Int!
  securityCode: String!
  firstName: String!
  lastName: String!
  postalCode: String!
  country: String!
}

type CreditCardInformationSubscriptionPayload {
  mutation: MutationType!
  node: CreditCardInformation
  updatedFields: [String!]
  previousValues: CreditCardInformationPreviousValues
}

input CreditCardInformationSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [CreditCardInformationSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [CreditCardInformationSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [CreditCardInformationSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: CreditCardInformationWhereInput
}

input CreditCardInformationUpdateInput {
  cardNumber: String
  expiresOnMonth: Int
  expiresOnYear: Int
  securityCode: String
  firstName: String
  lastName: String
  postalCode: String
  country: String
  paymentAccount: PaymentAccountUpdateOneWithoutCreditcardInput
}

input CreditCardInformationUpdateOneWithoutPaymentAccountInput {
  create: CreditCardInformationCreateWithoutPaymentAccountInput
  connect: CreditCardInformationWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: CreditCardInformationUpdateWithoutPaymentAccountDataInput
  upsert: CreditCardInformationUpsertWithoutPaymentAccountInput
}

input CreditCardInformationUpdateWithoutPaymentAccountDataInput {
  cardNumber: String
  expiresOnMonth: Int
  expiresOnYear: Int
  securityCode: String
  firstName: String
  lastName: String
  postalCode: String
  country: String
}

input CreditCardInformationUpsertWithoutPaymentAccountInput {
  update: CreditCardInformationUpdateWithoutPaymentAccountDataInput!
  create: CreditCardInformationCreateWithoutPaymentAccountInput!
}

input CreditCardInformationWhereInput {
  """Logical AND on all given filters."""
  AND: [CreditCardInformationWhereInput!]

  """Logical OR on all given filters."""
  OR: [CreditCardInformationWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [CreditCardInformationWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  cardNumber: String

  """All values that are not equal to given value."""
  cardNumber_not: String

  """All values that are contained in given list."""
  cardNumber_in: [String!]

  """All values that are not contained in given list."""
  cardNumber_not_in: [String!]

  """All values less than the given value."""
  cardNumber_lt: String

  """All values less than or equal the given value."""
  cardNumber_lte: String

  """All values greater than the given value."""
  cardNumber_gt: String

  """All values greater than or equal the given value."""
  cardNumber_gte: String

  """All values containing the given string."""
  cardNumber_contains: String

  """All values not containing the given string."""
  cardNumber_not_contains: String

  """All values starting with the given string."""
  cardNumber_starts_with: String

  """All values not starting with the given string."""
  cardNumber_not_starts_with: String

  """All values ending with the given string."""
  cardNumber_ends_with: String

  """All values not ending with the given string."""
  cardNumber_not_ends_with: String
  expiresOnMonth: Int

  """All values that are not equal to given value."""
  expiresOnMonth_not: Int

  """All values that are contained in given list."""
  expiresOnMonth_in: [Int!]

  """All values that are not contained in given list."""
  expiresOnMonth_not_in: [Int!]

  """All values less than the given value."""
  expiresOnMonth_lt: Int

  """All values less than or equal the given value."""
  expiresOnMonth_lte: Int

  """All values greater than the given value."""
  expiresOnMonth_gt: Int

  """All values greater than or equal the given value."""
  expiresOnMonth_gte: Int
  expiresOnYear: Int

  """All values that are not equal to given value."""
  expiresOnYear_not: Int

  """All values that are contained in given list."""
  expiresOnYear_in: [Int!]

  """All values that are not contained in given list."""
  expiresOnYear_not_in: [Int!]

  """All values less than the given value."""
  expiresOnYear_lt: Int

  """All values less than or equal the given value."""
  expiresOnYear_lte: Int

  """All values greater than the given value."""
  expiresOnYear_gt: Int

  """All values greater than or equal the given value."""
  expiresOnYear_gte: Int
  securityCode: String

  """All values that are not equal to given value."""
  securityCode_not: String

  """All values that are contained in given list."""
  securityCode_in: [String!]

  """All values that are not contained in given list."""
  securityCode_not_in: [String!]

  """All values less than the given value."""
  securityCode_lt: String

  """All values less than or equal the given value."""
  securityCode_lte: String

  """All values greater than the given value."""
  securityCode_gt: String

  """All values greater than or equal the given value."""
  securityCode_gte: String

  """All values containing the given string."""
  securityCode_contains: String

  """All values not containing the given string."""
  securityCode_not_contains: String

  """All values starting with the given string."""
  securityCode_starts_with: String

  """All values not starting with the given string."""
  securityCode_not_starts_with: String

  """All values ending with the given string."""
  securityCode_ends_with: String

  """All values not ending with the given string."""
  securityCode_not_ends_with: String
  firstName: String

  """All values that are not equal to given value."""
  firstName_not: String

  """All values that are contained in given list."""
  firstName_in: [String!]

  """All values that are not contained in given list."""
  firstName_not_in: [String!]

  """All values less than the given value."""
  firstName_lt: String

  """All values less than or equal the given value."""
  firstName_lte: String

  """All values greater than the given value."""
  firstName_gt: String

  """All values greater than or equal the given value."""
  firstName_gte: String

  """All values containing the given string."""
  firstName_contains: String

  """All values not containing the given string."""
  firstName_not_contains: String

  """All values starting with the given string."""
  firstName_starts_with: String

  """All values not starting with the given string."""
  firstName_not_starts_with: String

  """All values ending with the given string."""
  firstName_ends_with: String

  """All values not ending with the given string."""
  firstName_not_ends_with: String
  lastName: String

  """All values that are not equal to given value."""
  lastName_not: String

  """All values that are contained in given list."""
  lastName_in: [String!]

  """All values that are not contained in given list."""
  lastName_not_in: [String!]

  """All values less than the given value."""
  lastName_lt: String

  """All values less than or equal the given value."""
  lastName_lte: String

  """All values greater than the given value."""
  lastName_gt: String

  """All values greater than or equal the given value."""
  lastName_gte: String

  """All values containing the given string."""
  lastName_contains: String

  """All values not containing the given string."""
  lastName_not_contains: String

  """All values starting with the given string."""
  lastName_starts_with: String

  """All values not starting with the given string."""
  lastName_not_starts_with: String

  """All values ending with the given string."""
  lastName_ends_with: String

  """All values not ending with the given string."""
  lastName_not_ends_with: String
  postalCode: String

  """All values that are not equal to given value."""
  postalCode_not: String

  """All values that are contained in given list."""
  postalCode_in: [String!]

  """All values that are not contained in given list."""
  postalCode_not_in: [String!]

  """All values less than the given value."""
  postalCode_lt: String

  """All values less than or equal the given value."""
  postalCode_lte: String

  """All values greater than the given value."""
  postalCode_gt: String

  """All values greater than or equal the given value."""
  postalCode_gte: String

  """All values containing the given string."""
  postalCode_contains: String

  """All values not containing the given string."""
  postalCode_not_contains: String

  """All values starting with the given string."""
  postalCode_starts_with: String

  """All values not starting with the given string."""
  postalCode_not_starts_with: String

  """All values ending with the given string."""
  postalCode_ends_with: String

  """All values not ending with the given string."""
  postalCode_not_ends_with: String
  country: String

  """All values that are not equal to given value."""
  country_not: String

  """All values that are contained in given list."""
  country_in: [String!]

  """All values that are not contained in given list."""
  country_not_in: [String!]

  """All values less than the given value."""
  country_lt: String

  """All values less than or equal the given value."""
  country_lte: String

  """All values greater than the given value."""
  country_gt: String

  """All values greater than or equal the given value."""
  country_gte: String

  """All values containing the given string."""
  country_contains: String

  """All values not containing the given string."""
  country_not_contains: String

  """All values starting with the given string."""
  country_starts_with: String

  """All values not starting with the given string."""
  country_not_starts_with: String

  """All values ending with the given string."""
  country_ends_with: String

  """All values not ending with the given string."""
  country_not_ends_with: String
  paymentAccount: PaymentAccountWhereInput
}

input CreditCardInformationWhereUniqueInput {
  id: ID
}

scalar DateTime

type Event implements Node {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  createdBy(where: UserWhereInput): User!
  title: String!
  description: String!
  date: DateTime!
  location(where: LocationWhereInput): Location
  tags(where: TagWhereInput, orderBy: TagOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Tag!]
}

"""A connection to a list of items."""
type EventConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [EventEdge]!
  aggregate: AggregateEvent!
}

input EventCreateInput {
  title: String!
  description: String!
  date: DateTime!
  createdBy: UserCreateOneInput!
  location: LocationCreateOneInput
  tags: TagCreateManyInput
}

"""An edge in a connection."""
type EventEdge {
  """The item at the end of the edge."""
  node: Event!

  """A cursor for use in pagination."""
  cursor: String!
}

enum EventOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  title_ASC
  title_DESC
  description_ASC
  description_DESC
  date_ASC
  date_DESC
}

type EventPreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  title: String!
  description: String!
  date: DateTime!
}

type EventSubscriptionPayload {
  mutation: MutationType!
  node: Event
  updatedFields: [String!]
  previousValues: EventPreviousValues
}

input EventSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [EventSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [EventSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [EventSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: EventWhereInput
}

input EventUpdateInput {
  title: String
  description: String
  date: DateTime
  createdBy: UserUpdateOneInput
  location: LocationUpdateOneInput
  tags: TagUpdateManyInput
}

input EventWhereInput {
  """Logical AND on all given filters."""
  AND: [EventWhereInput!]

  """Logical OR on all given filters."""
  OR: [EventWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [EventWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  title: String

  """All values that are not equal to given value."""
  title_not: String

  """All values that are contained in given list."""
  title_in: [String!]

  """All values that are not contained in given list."""
  title_not_in: [String!]

  """All values less than the given value."""
  title_lt: String

  """All values less than or equal the given value."""
  title_lte: String

  """All values greater than the given value."""
  title_gt: String

  """All values greater than or equal the given value."""
  title_gte: String

  """All values containing the given string."""
  title_contains: String

  """All values not containing the given string."""
  title_not_contains: String

  """All values starting with the given string."""
  title_starts_with: String

  """All values not starting with the given string."""
  title_not_starts_with: String

  """All values ending with the given string."""
  title_ends_with: String

  """All values not ending with the given string."""
  title_not_ends_with: String
  description: String

  """All values that are not equal to given value."""
  description_not: String

  """All values that are contained in given list."""
  description_in: [String!]

  """All values that are not contained in given list."""
  description_not_in: [String!]

  """All values less than the given value."""
  description_lt: String

  """All values less than or equal the given value."""
  description_lte: String

  """All values greater than the given value."""
  description_gt: String

  """All values greater than or equal the given value."""
  description_gte: String

  """All values containing the given string."""
  description_contains: String

  """All values not containing the given string."""
  description_not_contains: String

  """All values starting with the given string."""
  description_starts_with: String

  """All values not starting with the given string."""
  description_not_starts_with: String

  """All values ending with the given string."""
  description_ends_with: String

  """All values not ending with the given string."""
  description_not_ends_with: String
  date: DateTime

  """All values that are not equal to given value."""
  date_not: DateTime

  """All values that are contained in given list."""
  date_in: [DateTime!]

  """All values that are not contained in given list."""
  date_not_in: [DateTime!]

  """All values less than the given value."""
  date_lt: DateTime

  """All values less than or equal the given value."""
  date_lte: DateTime

  """All values greater than the given value."""
  date_gt: DateTime

  """All values greater than or equal the given value."""
  date_gte: DateTime
  createdBy: UserWhereInput
  location: LocationWhereInput
  tags_every: TagWhereInput
  tags_some: TagWhereInput
  tags_none: TagWhereInput
}

input EventWhereUniqueInput {
  id: ID
}

type File implements Node {
  id: ID!
  name: String!
  size: Int!
  secret: String!
  contentType: String!
  createdAt: DateTime!
  updatedAt: DateTime!
  url: String!
}

"""A connection to a list of items."""
type FileConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [FileEdge]!
  aggregate: AggregateFile!
}

input FileCreateInput {
  name: String!
  size: Int!
  secret: String!
  contentType: String!
  url: String!
}

input FileCreateManyInput {
  create: [FileCreateInput!]
  connect: [FileWhereUniqueInput!]
}

"""An edge in a connection."""
type FileEdge {
  """The item at the end of the edge."""
  node: File!

  """A cursor for use in pagination."""
  cursor: String!
}

enum FileOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  size_ASC
  size_DESC
  secret_ASC
  secret_DESC
  contentType_ASC
  contentType_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  url_ASC
  url_DESC
}

type FilePreviousValues {
  id: ID!
  name: String!
  size: Int!
  secret: String!
  contentType: String!
  createdAt: DateTime!
  updatedAt: DateTime!
  url: String!
}

type FileSubscriptionPayload {
  mutation: MutationType!
  node: File
  updatedFields: [String!]
  previousValues: FilePreviousValues
}

input FileSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [FileSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [FileSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [FileSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: FileWhereInput
}

input FileUpdateDataInput {
  name: String
  size: Int
  secret: String
  contentType: String
  url: String
}

input FileUpdateInput {
  name: String
  size: Int
  secret: String
  contentType: String
  url: String
}

input FileUpdateManyInput {
  create: [FileCreateInput!]
  connect: [FileWhereUniqueInput!]
  disconnect: [FileWhereUniqueInput!]
  delete: [FileWhereUniqueInput!]
  update: [FileUpdateWithWhereUniqueNestedInput!]
  upsert: [FileUpsertWithWhereUniqueNestedInput!]
}

input FileUpdateWithWhereUniqueNestedInput {
  where: FileWhereUniqueInput!
  data: FileUpdateDataInput!
}

input FileUpsertWithWhereUniqueNestedInput {
  where: FileWhereUniqueInput!
  update: FileUpdateDataInput!
  create: FileCreateInput!
}

input FileWhereInput {
  """Logical AND on all given filters."""
  AND: [FileWhereInput!]

  """Logical OR on all given filters."""
  OR: [FileWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [FileWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  size: Int

  """All values that are not equal to given value."""
  size_not: Int

  """All values that are contained in given list."""
  size_in: [Int!]

  """All values that are not contained in given list."""
  size_not_in: [Int!]

  """All values less than the given value."""
  size_lt: Int

  """All values less than or equal the given value."""
  size_lte: Int

  """All values greater than the given value."""
  size_gt: Int

  """All values greater than or equal the given value."""
  size_gte: Int
  secret: String

  """All values that are not equal to given value."""
  secret_not: String

  """All values that are contained in given list."""
  secret_in: [String!]

  """All values that are not contained in given list."""
  secret_not_in: [String!]

  """All values less than the given value."""
  secret_lt: String

  """All values less than or equal the given value."""
  secret_lte: String

  """All values greater than the given value."""
  secret_gt: String

  """All values greater than or equal the given value."""
  secret_gte: String

  """All values containing the given string."""
  secret_contains: String

  """All values not containing the given string."""
  secret_not_contains: String

  """All values starting with the given string."""
  secret_starts_with: String

  """All values not starting with the given string."""
  secret_not_starts_with: String

  """All values ending with the given string."""
  secret_ends_with: String

  """All values not ending with the given string."""
  secret_not_ends_with: String
  contentType: String

  """All values that are not equal to given value."""
  contentType_not: String

  """All values that are contained in given list."""
  contentType_in: [String!]

  """All values that are not contained in given list."""
  contentType_not_in: [String!]

  """All values less than the given value."""
  contentType_lt: String

  """All values less than or equal the given value."""
  contentType_lte: String

  """All values greater than the given value."""
  contentType_gt: String

  """All values greater than or equal the given value."""
  contentType_gte: String

  """All values containing the given string."""
  contentType_contains: String

  """All values not containing the given string."""
  contentType_not_contains: String

  """All values starting with the given string."""
  contentType_starts_with: String

  """All values not starting with the given string."""
  contentType_not_starts_with: String

  """All values ending with the given string."""
  contentType_ends_with: String

  """All values not ending with the given string."""
  contentType_not_ends_with: String
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  url: String

  """All values that are not equal to given value."""
  url_not: String

  """All values that are contained in given list."""
  url_in: [String!]

  """All values that are not contained in given list."""
  url_not_in: [String!]

  """All values less than the given value."""
  url_lt: String

  """All values less than or equal the given value."""
  url_lte: String

  """All values greater than the given value."""
  url_gt: String

  """All values greater than or equal the given value."""
  url_gte: String

  """All values containing the given string."""
  url_contains: String

  """All values not containing the given string."""
  url_not_contains: String

  """All values starting with the given string."""
  url_starts_with: String

  """All values not starting with the given string."""
  url_not_starts_with: String

  """All values ending with the given string."""
  url_ends_with: String

  """All values not ending with the given string."""
  url_not_ends_with: String
}

input FileWhereUniqueInput {
  id: ID
  secret: String
  url: String
}

type Location implements Node {
  id: ID!
  lat: Float!
  lng: Float!
  city(where: CityWhereInput): City
  address: String
  directions: String
}

"""A connection to a list of items."""
type LocationConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [LocationEdge]!
  aggregate: AggregateLocation!
}

input LocationCreateInput {
  lat: Float!
  lng: Float!
  address: String
  directions: String
  city: CityCreateOneInput
}

input LocationCreateOneInput {
  create: LocationCreateInput
  connect: LocationWhereUniqueInput
}

"""An edge in a connection."""
type LocationEdge {
  """The item at the end of the edge."""
  node: Location!

  """A cursor for use in pagination."""
  cursor: String!
}

enum LocationOrderByInput {
  id_ASC
  id_DESC
  lat_ASC
  lat_DESC
  lng_ASC
  lng_DESC
  address_ASC
  address_DESC
  directions_ASC
  directions_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type LocationPreviousValues {
  id: ID!
  lat: Float!
  lng: Float!
  address: String
  directions: String
}

type LocationSubscriptionPayload {
  mutation: MutationType!
  node: Location
  updatedFields: [String!]
  previousValues: LocationPreviousValues
}

input LocationSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [LocationSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [LocationSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [LocationSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: LocationWhereInput
}

input LocationUpdateDataInput {
  lat: Float
  lng: Float
  address: String
  directions: String
  city: CityUpdateOneInput
}

input LocationUpdateInput {
  lat: Float
  lng: Float
  address: String
  directions: String
  city: CityUpdateOneInput
}

input LocationUpdateOneInput {
  create: LocationCreateInput
  connect: LocationWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: LocationUpdateDataInput
  upsert: LocationUpsertNestedInput
}

input LocationUpsertNestedInput {
  update: LocationUpdateDataInput!
  create: LocationCreateInput!
}

input LocationWhereInput {
  """Logical AND on all given filters."""
  AND: [LocationWhereInput!]

  """Logical OR on all given filters."""
  OR: [LocationWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [LocationWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  lat: Float

  """All values that are not equal to given value."""
  lat_not: Float

  """All values that are contained in given list."""
  lat_in: [Float!]

  """All values that are not contained in given list."""
  lat_not_in: [Float!]

  """All values less than the given value."""
  lat_lt: Float

  """All values less than or equal the given value."""
  lat_lte: Float

  """All values greater than the given value."""
  lat_gt: Float

  """All values greater than or equal the given value."""
  lat_gte: Float
  lng: Float

  """All values that are not equal to given value."""
  lng_not: Float

  """All values that are contained in given list."""
  lng_in: [Float!]

  """All values that are not contained in given list."""
  lng_not_in: [Float!]

  """All values less than the given value."""
  lng_lt: Float

  """All values less than or equal the given value."""
  lng_lte: Float

  """All values greater than the given value."""
  lng_gt: Float

  """All values greater than or equal the given value."""
  lng_gte: Float
  address: String

  """All values that are not equal to given value."""
  address_not: String

  """All values that are contained in given list."""
  address_in: [String!]

  """All values that are not contained in given list."""
  address_not_in: [String!]

  """All values less than the given value."""
  address_lt: String

  """All values less than or equal the given value."""
  address_lte: String

  """All values greater than the given value."""
  address_gt: String

  """All values greater than or equal the given value."""
  address_gte: String

  """All values containing the given string."""
  address_contains: String

  """All values not containing the given string."""
  address_not_contains: String

  """All values starting with the given string."""
  address_starts_with: String

  """All values not starting with the given string."""
  address_not_starts_with: String

  """All values ending with the given string."""
  address_ends_with: String

  """All values not ending with the given string."""
  address_not_ends_with: String
  directions: String

  """All values that are not equal to given value."""
  directions_not: String

  """All values that are contained in given list."""
  directions_in: [String!]

  """All values that are not contained in given list."""
  directions_not_in: [String!]

  """All values less than the given value."""
  directions_lt: String

  """All values less than or equal the given value."""
  directions_lte: String

  """All values greater than the given value."""
  directions_gt: String

  """All values greater than or equal the given value."""
  directions_gte: String

  """All values containing the given string."""
  directions_contains: String

  """All values not containing the given string."""
  directions_not_contains: String

  """All values starting with the given string."""
  directions_starts_with: String

  """All values not starting with the given string."""
  directions_not_starts_with: String

  """All values ending with the given string."""
  directions_ends_with: String

  """All values not ending with the given string."""
  directions_not_ends_with: String
  city: CityWhereInput
}

input LocationWhereUniqueInput {
  id: ID
}

"""
The \`Long\` scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
"""
scalar Long

type Message implements Node {
  id: ID!
  createdAt: DateTime!
  from(where: UserWhereInput): User!
  to(where: UserWhereInput): User!
  deliveredAt: DateTime!
  readAt: DateTime!
}

"""A connection to a list of items."""
type MessageConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [MessageEdge]!
  aggregate: AggregateMessage!
}

input MessageCreateInput {
  deliveredAt: DateTime!
  readAt: DateTime!
  from: UserCreateOneInput!
  to: UserCreateOneInput!
}

"""An edge in a connection."""
type MessageEdge {
  """The item at the end of the edge."""
  node: Message!

  """A cursor for use in pagination."""
  cursor: String!
}

enum MessageOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  deliveredAt_ASC
  deliveredAt_DESC
  readAt_ASC
  readAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type MessagePreviousValues {
  id: ID!
  createdAt: DateTime!
  deliveredAt: DateTime!
  readAt: DateTime!
}

type MessageSubscriptionPayload {
  mutation: MutationType!
  node: Message
  updatedFields: [String!]
  previousValues: MessagePreviousValues
}

input MessageSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [MessageSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [MessageSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [MessageSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: MessageWhereInput
}

input MessageUpdateInput {
  deliveredAt: DateTime
  readAt: DateTime
  from: UserUpdateOneInput
  to: UserUpdateOneInput
}

input MessageWhereInput {
  """Logical AND on all given filters."""
  AND: [MessageWhereInput!]

  """Logical OR on all given filters."""
  OR: [MessageWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [MessageWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  deliveredAt: DateTime

  """All values that are not equal to given value."""
  deliveredAt_not: DateTime

  """All values that are contained in given list."""
  deliveredAt_in: [DateTime!]

  """All values that are not contained in given list."""
  deliveredAt_not_in: [DateTime!]

  """All values less than the given value."""
  deliveredAt_lt: DateTime

  """All values less than or equal the given value."""
  deliveredAt_lte: DateTime

  """All values greater than the given value."""
  deliveredAt_gt: DateTime

  """All values greater than or equal the given value."""
  deliveredAt_gte: DateTime
  readAt: DateTime

  """All values that are not equal to given value."""
  readAt_not: DateTime

  """All values that are contained in given list."""
  readAt_in: [DateTime!]

  """All values that are not contained in given list."""
  readAt_not_in: [DateTime!]

  """All values less than the given value."""
  readAt_lt: DateTime

  """All values less than or equal the given value."""
  readAt_lte: DateTime

  """All values greater than the given value."""
  readAt_gt: DateTime

  """All values greater than or equal the given value."""
  readAt_gte: DateTime
  from: UserWhereInput
  to: UserWhereInput
}

input MessageWhereUniqueInput {
  id: ID
}

type Mutation {
  createPicture(data: PictureCreateInput!): Picture!
  createCategory(data: CategoryCreateInput!): Category!
  createPost(data: PostCreateInput!): Post!
  createStatusUpdate(data: StatusUpdateCreateInput!): StatusUpdate!
  createReminder(data: ReminderCreateInput!): Reminder!
  createEvent(data: EventCreateInput!): Event!
  createMessage(data: MessageCreateInput!): Message!
  createNotification(data: NotificationCreateInput!): Notification!
  createPayment(data: PaymentCreateInput!): Payment!
  createPaymentAccount(data: PaymentAccountCreateInput!): PaymentAccount!
  createPaypalInformation(data: PaypalInformationCreateInput!): PaypalInformation!
  createCreditCardInformation(data: CreditCardInformationCreateInput!): CreditCardInformation!
  createPriority(data: PriorityCreateInput!): Priority!
  createCity(data: CityCreateInput!): City!
  createTask(data: TaskCreateInput!): Task!
  createTag(data: TagCreateInput!): Tag!
  createUser(data: UserCreateInput!): User!
  createLocation(data: LocationCreateInput!): Location!
  createFile(data: FileCreateInput!): File!
  updateCategory(data: CategoryUpdateInput!, where: CategoryWhereUniqueInput!): Category
  updatePost(data: PostUpdateInput!, where: PostWhereUniqueInput!): Post
  updateStatusUpdate(data: StatusUpdateUpdateInput!, where: StatusUpdateWhereUniqueInput!): StatusUpdate
  updateReminder(data: ReminderUpdateInput!, where: ReminderWhereUniqueInput!): Reminder
  updateEvent(data: EventUpdateInput!, where: EventWhereUniqueInput!): Event
  updateMessage(data: MessageUpdateInput!, where: MessageWhereUniqueInput!): Message
  updateNotification(data: NotificationUpdateInput!, where: NotificationWhereUniqueInput!): Notification
  updatePayment(data: PaymentUpdateInput!, where: PaymentWhereUniqueInput!): Payment
  updatePaymentAccount(data: PaymentAccountUpdateInput!, where: PaymentAccountWhereUniqueInput!): PaymentAccount
  updatePaypalInformation(data: PaypalInformationUpdateInput!, where: PaypalInformationWhereUniqueInput!): PaypalInformation
  updateCreditCardInformation(data: CreditCardInformationUpdateInput!, where: CreditCardInformationWhereUniqueInput!): CreditCardInformation
  updatePriority(data: PriorityUpdateInput!, where: PriorityWhereUniqueInput!): Priority
  updateCity(data: CityUpdateInput!, where: CityWhereUniqueInput!): City
  updateTask(data: TaskUpdateInput!, where: TaskWhereUniqueInput!): Task
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateLocation(data: LocationUpdateInput!, where: LocationWhereUniqueInput!): Location
  updateFile(data: FileUpdateInput!, where: FileWhereUniqueInput!): File
  deleteCategory(where: CategoryWhereUniqueInput!): Category
  deletePost(where: PostWhereUniqueInput!): Post
  deleteStatusUpdate(where: StatusUpdateWhereUniqueInput!): StatusUpdate
  deleteReminder(where: ReminderWhereUniqueInput!): Reminder
  deleteEvent(where: EventWhereUniqueInput!): Event
  deleteMessage(where: MessageWhereUniqueInput!): Message
  deleteNotification(where: NotificationWhereUniqueInput!): Notification
  deletePayment(where: PaymentWhereUniqueInput!): Payment
  deletePaymentAccount(where: PaymentAccountWhereUniqueInput!): PaymentAccount
  deletePaypalInformation(where: PaypalInformationWhereUniqueInput!): PaypalInformation
  deleteCreditCardInformation(where: CreditCardInformationWhereUniqueInput!): CreditCardInformation
  deletePriority(where: PriorityWhereUniqueInput!): Priority
  deleteCity(where: CityWhereUniqueInput!): City
  deleteTask(where: TaskWhereUniqueInput!): Task
  deleteUser(where: UserWhereUniqueInput!): User
  deleteLocation(where: LocationWhereUniqueInput!): Location
  deleteFile(where: FileWhereUniqueInput!): File
  upsertCategory(where: CategoryWhereUniqueInput!, create: CategoryCreateInput!, update: CategoryUpdateInput!): Category!
  upsertPost(where: PostWhereUniqueInput!, create: PostCreateInput!, update: PostUpdateInput!): Post!
  upsertStatusUpdate(where: StatusUpdateWhereUniqueInput!, create: StatusUpdateCreateInput!, update: StatusUpdateUpdateInput!): StatusUpdate!
  upsertReminder(where: ReminderWhereUniqueInput!, create: ReminderCreateInput!, update: ReminderUpdateInput!): Reminder!
  upsertEvent(where: EventWhereUniqueInput!, create: EventCreateInput!, update: EventUpdateInput!): Event!
  upsertMessage(where: MessageWhereUniqueInput!, create: MessageCreateInput!, update: MessageUpdateInput!): Message!
  upsertNotification(where: NotificationWhereUniqueInput!, create: NotificationCreateInput!, update: NotificationUpdateInput!): Notification!
  upsertPayment(where: PaymentWhereUniqueInput!, create: PaymentCreateInput!, update: PaymentUpdateInput!): Payment!
  upsertPaymentAccount(where: PaymentAccountWhereUniqueInput!, create: PaymentAccountCreateInput!, update: PaymentAccountUpdateInput!): PaymentAccount!
  upsertPaypalInformation(where: PaypalInformationWhereUniqueInput!, create: PaypalInformationCreateInput!, update: PaypalInformationUpdateInput!): PaypalInformation!
  upsertCreditCardInformation(where: CreditCardInformationWhereUniqueInput!, create: CreditCardInformationCreateInput!, update: CreditCardInformationUpdateInput!): CreditCardInformation!
  upsertPriority(where: PriorityWhereUniqueInput!, create: PriorityCreateInput!, update: PriorityUpdateInput!): Priority!
  upsertCity(where: CityWhereUniqueInput!, create: CityCreateInput!, update: CityUpdateInput!): City!
  upsertTask(where: TaskWhereUniqueInput!, create: TaskCreateInput!, update: TaskUpdateInput!): Task!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  upsertLocation(where: LocationWhereUniqueInput!, create: LocationCreateInput!, update: LocationUpdateInput!): Location!
  upsertFile(where: FileWhereUniqueInput!, create: FileCreateInput!, update: FileUpdateInput!): File!
  updateManyPictures(data: PictureUpdateInput!, where: PictureWhereInput): BatchPayload!
  updateManyCategories(data: CategoryUpdateInput!, where: CategoryWhereInput): BatchPayload!
  updateManyPosts(data: PostUpdateInput!, where: PostWhereInput): BatchPayload!
  updateManyStatusUpdates(data: StatusUpdateUpdateInput!, where: StatusUpdateWhereInput): BatchPayload!
  updateManyReminders(data: ReminderUpdateInput!, where: ReminderWhereInput): BatchPayload!
  updateManyEvents(data: EventUpdateInput!, where: EventWhereInput): BatchPayload!
  updateManyMessages(data: MessageUpdateInput!, where: MessageWhereInput): BatchPayload!
  updateManyNotifications(data: NotificationUpdateInput!, where: NotificationWhereInput): BatchPayload!
  updateManyPayments(data: PaymentUpdateInput!, where: PaymentWhereInput): BatchPayload!
  updateManyPaymentAccounts(data: PaymentAccountUpdateInput!, where: PaymentAccountWhereInput): BatchPayload!
  updateManyPaypalInformations(data: PaypalInformationUpdateInput!, where: PaypalInformationWhereInput): BatchPayload!
  updateManyCreditCardInformations(data: CreditCardInformationUpdateInput!, where: CreditCardInformationWhereInput): BatchPayload!
  updateManyPriorities(data: PriorityUpdateInput!, where: PriorityWhereInput): BatchPayload!
  updateManyCities(data: CityUpdateInput!, where: CityWhereInput): BatchPayload!
  updateManyTasks(data: TaskUpdateInput!, where: TaskWhereInput): BatchPayload!
  updateManyTags(data: TagUpdateInput!, where: TagWhereInput): BatchPayload!
  updateManyUsers(data: UserUpdateInput!, where: UserWhereInput): BatchPayload!
  updateManyLocations(data: LocationUpdateInput!, where: LocationWhereInput): BatchPayload!
  updateManyFiles(data: FileUpdateInput!, where: FileWhereInput): BatchPayload!
  deleteManyPictures(where: PictureWhereInput): BatchPayload!
  deleteManyCategories(where: CategoryWhereInput): BatchPayload!
  deleteManyPosts(where: PostWhereInput): BatchPayload!
  deleteManyStatusUpdates(where: StatusUpdateWhereInput): BatchPayload!
  deleteManyReminders(where: ReminderWhereInput): BatchPayload!
  deleteManyEvents(where: EventWhereInput): BatchPayload!
  deleteManyMessages(where: MessageWhereInput): BatchPayload!
  deleteManyNotifications(where: NotificationWhereInput): BatchPayload!
  deleteManyPayments(where: PaymentWhereInput): BatchPayload!
  deleteManyPaymentAccounts(where: PaymentAccountWhereInput): BatchPayload!
  deleteManyPaypalInformations(where: PaypalInformationWhereInput): BatchPayload!
  deleteManyCreditCardInformations(where: CreditCardInformationWhereInput): BatchPayload!
  deleteManyPriorities(where: PriorityWhereInput): BatchPayload!
  deleteManyCities(where: CityWhereInput): BatchPayload!
  deleteManyTasks(where: TaskWhereInput): BatchPayload!
  deleteManyTags(where: TagWhereInput): BatchPayload!
  deleteManyUsers(where: UserWhereInput): BatchPayload!
  deleteManyLocations(where: LocationWhereInput): BatchPayload!
  deleteManyFiles(where: FileWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

"""An object with an ID"""
interface Node {
  """The id of the object."""
  id: ID!
}

type Notification implements Node {
  id: ID!
  createdAt: DateTime!
  type: NOTIFICATION_TYPE
  user(where: UserWhereInput): User!
  link: String!
  readDate: DateTime!
}

enum NOTIFICATION_TYPE {
  SIGNUP
  TASK_DUE
  TODAYS_TASKS
  TASK
  REMINDER
  EVENT
}

"""A connection to a list of items."""
type NotificationConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [NotificationEdge]!
  aggregate: AggregateNotification!
}

input NotificationCreateInput {
  type: NOTIFICATION_TYPE
  link: String!
  readDate: DateTime!
  user: UserCreateOneWithoutNotificationsInput!
}

input NotificationCreateManyWithoutUserInput {
  create: [NotificationCreateWithoutUserInput!]
  connect: [NotificationWhereUniqueInput!]
}

input NotificationCreateWithoutUserInput {
  type: NOTIFICATION_TYPE
  link: String!
  readDate: DateTime!
}

"""An edge in a connection."""
type NotificationEdge {
  """The item at the end of the edge."""
  node: Notification!

  """A cursor for use in pagination."""
  cursor: String!
}

enum NotificationOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  type_ASC
  type_DESC
  link_ASC
  link_DESC
  readDate_ASC
  readDate_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type NotificationPreviousValues {
  id: ID!
  createdAt: DateTime!
  type: NOTIFICATION_TYPE
  link: String!
  readDate: DateTime!
}

type NotificationSubscriptionPayload {
  mutation: MutationType!
  node: Notification
  updatedFields: [String!]
  previousValues: NotificationPreviousValues
}

input NotificationSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [NotificationSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [NotificationSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [NotificationSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: NotificationWhereInput
}

input NotificationUpdateInput {
  type: NOTIFICATION_TYPE
  link: String
  readDate: DateTime
  user: UserUpdateOneWithoutNotificationsInput
}

input NotificationUpdateManyWithoutUserInput {
  create: [NotificationCreateWithoutUserInput!]
  connect: [NotificationWhereUniqueInput!]
  disconnect: [NotificationWhereUniqueInput!]
  delete: [NotificationWhereUniqueInput!]
  update: [NotificationUpdateWithWhereUniqueWithoutUserInput!]
  upsert: [NotificationUpsertWithWhereUniqueWithoutUserInput!]
}

input NotificationUpdateWithoutUserDataInput {
  type: NOTIFICATION_TYPE
  link: String
  readDate: DateTime
}

input NotificationUpdateWithWhereUniqueWithoutUserInput {
  where: NotificationWhereUniqueInput!
  data: NotificationUpdateWithoutUserDataInput!
}

input NotificationUpsertWithWhereUniqueWithoutUserInput {
  where: NotificationWhereUniqueInput!
  update: NotificationUpdateWithoutUserDataInput!
  create: NotificationCreateWithoutUserInput!
}

input NotificationWhereInput {
  """Logical AND on all given filters."""
  AND: [NotificationWhereInput!]

  """Logical OR on all given filters."""
  OR: [NotificationWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [NotificationWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  type: NOTIFICATION_TYPE

  """All values that are not equal to given value."""
  type_not: NOTIFICATION_TYPE

  """All values that are contained in given list."""
  type_in: [NOTIFICATION_TYPE!]

  """All values that are not contained in given list."""
  type_not_in: [NOTIFICATION_TYPE!]
  link: String

  """All values that are not equal to given value."""
  link_not: String

  """All values that are contained in given list."""
  link_in: [String!]

  """All values that are not contained in given list."""
  link_not_in: [String!]

  """All values less than the given value."""
  link_lt: String

  """All values less than or equal the given value."""
  link_lte: String

  """All values greater than the given value."""
  link_gt: String

  """All values greater than or equal the given value."""
  link_gte: String

  """All values containing the given string."""
  link_contains: String

  """All values not containing the given string."""
  link_not_contains: String

  """All values starting with the given string."""
  link_starts_with: String

  """All values not starting with the given string."""
  link_not_starts_with: String

  """All values ending with the given string."""
  link_ends_with: String

  """All values not ending with the given string."""
  link_not_ends_with: String
  readDate: DateTime

  """All values that are not equal to given value."""
  readDate_not: DateTime

  """All values that are contained in given list."""
  readDate_in: [DateTime!]

  """All values that are not contained in given list."""
  readDate_not_in: [DateTime!]

  """All values less than the given value."""
  readDate_lt: DateTime

  """All values less than or equal the given value."""
  readDate_lte: DateTime

  """All values greater than the given value."""
  readDate_gt: DateTime

  """All values greater than or equal the given value."""
  readDate_gte: DateTime
  user: UserWhereInput
}

input NotificationWhereUniqueInput {
  id: ID
}

"""Information about pagination in a connection."""
type PageInfo {
  """When paginating forwards, are there more items?"""
  hasNextPage: Boolean!

  """When paginating backwards, are there more items?"""
  hasPreviousPage: Boolean!

  """When paginating backwards, the cursor to continue."""
  startCursor: String

  """When paginating forwards, the cursor to continue."""
  endCursor: String
}

type Payment implements Node {
  id: ID!
  createdAt: DateTime!
  serviceFee: Float!
  placePrice: Float!
  totalPrice: Float!
  paymentMethod(where: PaymentAccountWhereInput): PaymentAccount!
}

enum PAYMENT_PROVIDER {
  PAYPAL
  CREDIT_CARD
}

type PaymentAccount implements Node {
  id: ID!
  createdAt: DateTime!
  type: PAYMENT_PROVIDER
  user(where: UserWhereInput): User!
  payments(where: PaymentWhereInput, orderBy: PaymentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Payment!]
  paypal(where: PaypalInformationWhereInput): PaypalInformation
  creditcard(where: CreditCardInformationWhereInput): CreditCardInformation
}

"""A connection to a list of items."""
type PaymentAccountConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [PaymentAccountEdge]!
  aggregate: AggregatePaymentAccount!
}

input PaymentAccountCreateInput {
  type: PAYMENT_PROVIDER
  user: UserCreateOneInput!
  payments: PaymentCreateManyWithoutPaymentMethodInput
  paypal: PaypalInformationCreateOneWithoutPaymentAccountInput
  creditcard: CreditCardInformationCreateOneWithoutPaymentAccountInput
}

input PaymentAccountCreateOneWithoutCreditcardInput {
  create: PaymentAccountCreateWithoutCreditcardInput
  connect: PaymentAccountWhereUniqueInput
}

input PaymentAccountCreateOneWithoutPaymentsInput {
  create: PaymentAccountCreateWithoutPaymentsInput
  connect: PaymentAccountWhereUniqueInput
}

input PaymentAccountCreateOneWithoutPaypalInput {
  create: PaymentAccountCreateWithoutPaypalInput
  connect: PaymentAccountWhereUniqueInput
}

input PaymentAccountCreateWithoutCreditcardInput {
  type: PAYMENT_PROVIDER
  user: UserCreateOneInput!
  payments: PaymentCreateManyWithoutPaymentMethodInput
  paypal: PaypalInformationCreateOneWithoutPaymentAccountInput
}

input PaymentAccountCreateWithoutPaymentsInput {
  type: PAYMENT_PROVIDER
  user: UserCreateOneInput!
  paypal: PaypalInformationCreateOneWithoutPaymentAccountInput
  creditcard: CreditCardInformationCreateOneWithoutPaymentAccountInput
}

input PaymentAccountCreateWithoutPaypalInput {
  type: PAYMENT_PROVIDER
  user: UserCreateOneInput!
  payments: PaymentCreateManyWithoutPaymentMethodInput
  creditcard: CreditCardInformationCreateOneWithoutPaymentAccountInput
}

"""An edge in a connection."""
type PaymentAccountEdge {
  """The item at the end of the edge."""
  node: PaymentAccount!

  """A cursor for use in pagination."""
  cursor: String!
}

enum PaymentAccountOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  type_ASC
  type_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type PaymentAccountPreviousValues {
  id: ID!
  createdAt: DateTime!
  type: PAYMENT_PROVIDER
}

type PaymentAccountSubscriptionPayload {
  mutation: MutationType!
  node: PaymentAccount
  updatedFields: [String!]
  previousValues: PaymentAccountPreviousValues
}

input PaymentAccountSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [PaymentAccountSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [PaymentAccountSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [PaymentAccountSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: PaymentAccountWhereInput
}

input PaymentAccountUpdateInput {
  type: PAYMENT_PROVIDER
  user: UserUpdateOneInput
  payments: PaymentUpdateManyWithoutPaymentMethodInput
  paypal: PaypalInformationUpdateOneWithoutPaymentAccountInput
  creditcard: CreditCardInformationUpdateOneWithoutPaymentAccountInput
}

input PaymentAccountUpdateOneWithoutCreditcardInput {
  create: PaymentAccountCreateWithoutCreditcardInput
  connect: PaymentAccountWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: PaymentAccountUpdateWithoutCreditcardDataInput
  upsert: PaymentAccountUpsertWithoutCreditcardInput
}

input PaymentAccountUpdateOneWithoutPaymentsInput {
  create: PaymentAccountCreateWithoutPaymentsInput
  connect: PaymentAccountWhereUniqueInput
  delete: Boolean
  update: PaymentAccountUpdateWithoutPaymentsDataInput
  upsert: PaymentAccountUpsertWithoutPaymentsInput
}

input PaymentAccountUpdateOneWithoutPaypalInput {
  create: PaymentAccountCreateWithoutPaypalInput
  connect: PaymentAccountWhereUniqueInput
  delete: Boolean
  update: PaymentAccountUpdateWithoutPaypalDataInput
  upsert: PaymentAccountUpsertWithoutPaypalInput
}

input PaymentAccountUpdateWithoutCreditcardDataInput {
  type: PAYMENT_PROVIDER
  user: UserUpdateOneInput
  payments: PaymentUpdateManyWithoutPaymentMethodInput
  paypal: PaypalInformationUpdateOneWithoutPaymentAccountInput
}

input PaymentAccountUpdateWithoutPaymentsDataInput {
  type: PAYMENT_PROVIDER
  user: UserUpdateOneInput
  paypal: PaypalInformationUpdateOneWithoutPaymentAccountInput
  creditcard: CreditCardInformationUpdateOneWithoutPaymentAccountInput
}

input PaymentAccountUpdateWithoutPaypalDataInput {
  type: PAYMENT_PROVIDER
  user: UserUpdateOneInput
  payments: PaymentUpdateManyWithoutPaymentMethodInput
  creditcard: CreditCardInformationUpdateOneWithoutPaymentAccountInput
}

input PaymentAccountUpsertWithoutCreditcardInput {
  update: PaymentAccountUpdateWithoutCreditcardDataInput!
  create: PaymentAccountCreateWithoutCreditcardInput!
}

input PaymentAccountUpsertWithoutPaymentsInput {
  update: PaymentAccountUpdateWithoutPaymentsDataInput!
  create: PaymentAccountCreateWithoutPaymentsInput!
}

input PaymentAccountUpsertWithoutPaypalInput {
  update: PaymentAccountUpdateWithoutPaypalDataInput!
  create: PaymentAccountCreateWithoutPaypalInput!
}

input PaymentAccountWhereInput {
  """Logical AND on all given filters."""
  AND: [PaymentAccountWhereInput!]

  """Logical OR on all given filters."""
  OR: [PaymentAccountWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [PaymentAccountWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  type: PAYMENT_PROVIDER

  """All values that are not equal to given value."""
  type_not: PAYMENT_PROVIDER

  """All values that are contained in given list."""
  type_in: [PAYMENT_PROVIDER!]

  """All values that are not contained in given list."""
  type_not_in: [PAYMENT_PROVIDER!]
  user: UserWhereInput
  payments_every: PaymentWhereInput
  payments_some: PaymentWhereInput
  payments_none: PaymentWhereInput
  paypal: PaypalInformationWhereInput
  creditcard: CreditCardInformationWhereInput
}

input PaymentAccountWhereUniqueInput {
  id: ID
}

"""A connection to a list of items."""
type PaymentConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [PaymentEdge]!
  aggregate: AggregatePayment!
}

input PaymentCreateInput {
  serviceFee: Float!
  placePrice: Float!
  totalPrice: Float!
  paymentMethod: PaymentAccountCreateOneWithoutPaymentsInput!
}

input PaymentCreateManyWithoutPaymentMethodInput {
  create: [PaymentCreateWithoutPaymentMethodInput!]
  connect: [PaymentWhereUniqueInput!]
}

input PaymentCreateWithoutPaymentMethodInput {
  serviceFee: Float!
  placePrice: Float!
  totalPrice: Float!
}

"""An edge in a connection."""
type PaymentEdge {
  """The item at the end of the edge."""
  node: Payment!

  """A cursor for use in pagination."""
  cursor: String!
}

enum PaymentOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  serviceFee_ASC
  serviceFee_DESC
  placePrice_ASC
  placePrice_DESC
  totalPrice_ASC
  totalPrice_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type PaymentPreviousValues {
  id: ID!
  createdAt: DateTime!
  serviceFee: Float!
  placePrice: Float!
  totalPrice: Float!
}

type PaymentSubscriptionPayload {
  mutation: MutationType!
  node: Payment
  updatedFields: [String!]
  previousValues: PaymentPreviousValues
}

input PaymentSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [PaymentSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [PaymentSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [PaymentSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: PaymentWhereInput
}

input PaymentUpdateInput {
  serviceFee: Float
  placePrice: Float
  totalPrice: Float
  paymentMethod: PaymentAccountUpdateOneWithoutPaymentsInput
}

input PaymentUpdateManyWithoutPaymentMethodInput {
  create: [PaymentCreateWithoutPaymentMethodInput!]
  connect: [PaymentWhereUniqueInput!]
  disconnect: [PaymentWhereUniqueInput!]
  delete: [PaymentWhereUniqueInput!]
  update: [PaymentUpdateWithWhereUniqueWithoutPaymentMethodInput!]
  upsert: [PaymentUpsertWithWhereUniqueWithoutPaymentMethodInput!]
}

input PaymentUpdateWithoutPaymentMethodDataInput {
  serviceFee: Float
  placePrice: Float
  totalPrice: Float
}

input PaymentUpdateWithWhereUniqueWithoutPaymentMethodInput {
  where: PaymentWhereUniqueInput!
  data: PaymentUpdateWithoutPaymentMethodDataInput!
}

input PaymentUpsertWithWhereUniqueWithoutPaymentMethodInput {
  where: PaymentWhereUniqueInput!
  update: PaymentUpdateWithoutPaymentMethodDataInput!
  create: PaymentCreateWithoutPaymentMethodInput!
}

input PaymentWhereInput {
  """Logical AND on all given filters."""
  AND: [PaymentWhereInput!]

  """Logical OR on all given filters."""
  OR: [PaymentWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [PaymentWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  serviceFee: Float

  """All values that are not equal to given value."""
  serviceFee_not: Float

  """All values that are contained in given list."""
  serviceFee_in: [Float!]

  """All values that are not contained in given list."""
  serviceFee_not_in: [Float!]

  """All values less than the given value."""
  serviceFee_lt: Float

  """All values less than or equal the given value."""
  serviceFee_lte: Float

  """All values greater than the given value."""
  serviceFee_gt: Float

  """All values greater than or equal the given value."""
  serviceFee_gte: Float
  placePrice: Float

  """All values that are not equal to given value."""
  placePrice_not: Float

  """All values that are contained in given list."""
  placePrice_in: [Float!]

  """All values that are not contained in given list."""
  placePrice_not_in: [Float!]

  """All values less than the given value."""
  placePrice_lt: Float

  """All values less than or equal the given value."""
  placePrice_lte: Float

  """All values greater than the given value."""
  placePrice_gt: Float

  """All values greater than or equal the given value."""
  placePrice_gte: Float
  totalPrice: Float

  """All values that are not equal to given value."""
  totalPrice_not: Float

  """All values that are contained in given list."""
  totalPrice_in: [Float!]

  """All values that are not contained in given list."""
  totalPrice_not_in: [Float!]

  """All values less than the given value."""
  totalPrice_lt: Float

  """All values less than or equal the given value."""
  totalPrice_lte: Float

  """All values greater than the given value."""
  totalPrice_gt: Float

  """All values greater than or equal the given value."""
  totalPrice_gte: Float
  paymentMethod: PaymentAccountWhereInput
}

input PaymentWhereUniqueInput {
  id: ID
}

type PaypalInformation implements Node {
  id: ID!
  createdAt: DateTime!
  email: String!
  paymentAccount(where: PaymentAccountWhereInput): PaymentAccount!
}

"""A connection to a list of items."""
type PaypalInformationConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [PaypalInformationEdge]!
  aggregate: AggregatePaypalInformation!
}

input PaypalInformationCreateInput {
  email: String!
  paymentAccount: PaymentAccountCreateOneWithoutPaypalInput!
}

input PaypalInformationCreateOneWithoutPaymentAccountInput {
  create: PaypalInformationCreateWithoutPaymentAccountInput
  connect: PaypalInformationWhereUniqueInput
}

input PaypalInformationCreateWithoutPaymentAccountInput {
  email: String!
}

"""An edge in a connection."""
type PaypalInformationEdge {
  """The item at the end of the edge."""
  node: PaypalInformation!

  """A cursor for use in pagination."""
  cursor: String!
}

enum PaypalInformationOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  email_ASC
  email_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type PaypalInformationPreviousValues {
  id: ID!
  createdAt: DateTime!
  email: String!
}

type PaypalInformationSubscriptionPayload {
  mutation: MutationType!
  node: PaypalInformation
  updatedFields: [String!]
  previousValues: PaypalInformationPreviousValues
}

input PaypalInformationSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [PaypalInformationSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [PaypalInformationSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [PaypalInformationSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: PaypalInformationWhereInput
}

input PaypalInformationUpdateInput {
  email: String
  paymentAccount: PaymentAccountUpdateOneWithoutPaypalInput
}

input PaypalInformationUpdateOneWithoutPaymentAccountInput {
  create: PaypalInformationCreateWithoutPaymentAccountInput
  connect: PaypalInformationWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: PaypalInformationUpdateWithoutPaymentAccountDataInput
  upsert: PaypalInformationUpsertWithoutPaymentAccountInput
}

input PaypalInformationUpdateWithoutPaymentAccountDataInput {
  email: String
}

input PaypalInformationUpsertWithoutPaymentAccountInput {
  update: PaypalInformationUpdateWithoutPaymentAccountDataInput!
  create: PaypalInformationCreateWithoutPaymentAccountInput!
}

input PaypalInformationWhereInput {
  """Logical AND on all given filters."""
  AND: [PaypalInformationWhereInput!]

  """Logical OR on all given filters."""
  OR: [PaypalInformationWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [PaypalInformationWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  email: String

  """All values that are not equal to given value."""
  email_not: String

  """All values that are contained in given list."""
  email_in: [String!]

  """All values that are not contained in given list."""
  email_not_in: [String!]

  """All values less than the given value."""
  email_lt: String

  """All values less than or equal the given value."""
  email_lte: String

  """All values greater than the given value."""
  email_gt: String

  """All values greater than or equal the given value."""
  email_gte: String

  """All values containing the given string."""
  email_contains: String

  """All values not containing the given string."""
  email_not_contains: String

  """All values starting with the given string."""
  email_starts_with: String

  """All values not starting with the given string."""
  email_not_starts_with: String

  """All values ending with the given string."""
  email_ends_with: String

  """All values not ending with the given string."""
  email_not_ends_with: String
  paymentAccount: PaymentAccountWhereInput
}

input PaypalInformationWhereUniqueInput {
  id: ID
}

type Picture {
  url: String!
}

"""A connection to a list of items."""
type PictureConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [PictureEdge]!
  aggregate: AggregatePicture!
}

input PictureCreateInput {
  url: String!
}

"""An edge in a connection."""
type PictureEdge {
  """The item at the end of the edge."""
  node: Picture!

  """A cursor for use in pagination."""
  cursor: String!
}

enum PictureOrderByInput {
  url_ASC
  url_DESC
  id_ASC
  id_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type PicturePreviousValues {
  url: String!
}

type PictureSubscriptionPayload {
  mutation: MutationType!
  node: Picture
  updatedFields: [String!]
  previousValues: PicturePreviousValues
}

input PictureSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [PictureSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [PictureSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [PictureSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: PictureWhereInput
}

input PictureUpdateInput {
  url: String
}

input PictureWhereInput {
  """Logical AND on all given filters."""
  AND: [PictureWhereInput!]

  """Logical OR on all given filters."""
  OR: [PictureWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [PictureWhereInput!]
  url: String

  """All values that are not equal to given value."""
  url_not: String

  """All values that are contained in given list."""
  url_in: [String!]

  """All values that are not contained in given list."""
  url_not_in: [String!]

  """All values less than the given value."""
  url_lt: String

  """All values less than or equal the given value."""
  url_lte: String

  """All values greater than the given value."""
  url_gt: String

  """All values greater than or equal the given value."""
  url_gte: String

  """All values containing the given string."""
  url_contains: String

  """All values not containing the given string."""
  url_not_contains: String

  """All values starting with the given string."""
  url_starts_with: String

  """All values not starting with the given string."""
  url_not_starts_with: String

  """All values ending with the given string."""
  url_ends_with: String

  """All values not ending with the given string."""
  url_not_ends_with: String
}

type Post implements Node {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  isPublished: Boolean!
  title: String!
  text: String!
  author(where: UserWhereInput): User!
}

"""A connection to a list of items."""
type PostConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [PostEdge]!
  aggregate: AggregatePost!
}

input PostCreateInput {
  isPublished: Boolean
  title: String!
  text: String!
  author: UserCreateOneWithoutPostsInput!
}

input PostCreateManyWithoutAuthorInput {
  create: [PostCreateWithoutAuthorInput!]
  connect: [PostWhereUniqueInput!]
}

input PostCreateWithoutAuthorInput {
  isPublished: Boolean
  title: String!
  text: String!
}

"""An edge in a connection."""
type PostEdge {
  """The item at the end of the edge."""
  node: Post!

  """A cursor for use in pagination."""
  cursor: String!
}

enum PostOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  isPublished_ASC
  isPublished_DESC
  title_ASC
  title_DESC
  text_ASC
  text_DESC
}

type PostPreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  isPublished: Boolean!
  title: String!
  text: String!
}

type PostSubscriptionPayload {
  mutation: MutationType!
  node: Post
  updatedFields: [String!]
  previousValues: PostPreviousValues
}

input PostSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [PostSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [PostSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [PostSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: PostWhereInput
}

input PostUpdateInput {
  isPublished: Boolean
  title: String
  text: String
  author: UserUpdateOneWithoutPostsInput
}

input PostUpdateManyWithoutAuthorInput {
  create: [PostCreateWithoutAuthorInput!]
  connect: [PostWhereUniqueInput!]
  disconnect: [PostWhereUniqueInput!]
  delete: [PostWhereUniqueInput!]
  update: [PostUpdateWithWhereUniqueWithoutAuthorInput!]
  upsert: [PostUpsertWithWhereUniqueWithoutAuthorInput!]
}

input PostUpdateWithoutAuthorDataInput {
  isPublished: Boolean
  title: String
  text: String
}

input PostUpdateWithWhereUniqueWithoutAuthorInput {
  where: PostWhereUniqueInput!
  data: PostUpdateWithoutAuthorDataInput!
}

input PostUpsertWithWhereUniqueWithoutAuthorInput {
  where: PostWhereUniqueInput!
  update: PostUpdateWithoutAuthorDataInput!
  create: PostCreateWithoutAuthorInput!
}

input PostWhereInput {
  """Logical AND on all given filters."""
  AND: [PostWhereInput!]

  """Logical OR on all given filters."""
  OR: [PostWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [PostWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  isPublished: Boolean

  """All values that are not equal to given value."""
  isPublished_not: Boolean
  title: String

  """All values that are not equal to given value."""
  title_not: String

  """All values that are contained in given list."""
  title_in: [String!]

  """All values that are not contained in given list."""
  title_not_in: [String!]

  """All values less than the given value."""
  title_lt: String

  """All values less than or equal the given value."""
  title_lte: String

  """All values greater than the given value."""
  title_gt: String

  """All values greater than or equal the given value."""
  title_gte: String

  """All values containing the given string."""
  title_contains: String

  """All values not containing the given string."""
  title_not_contains: String

  """All values starting with the given string."""
  title_starts_with: String

  """All values not starting with the given string."""
  title_not_starts_with: String

  """All values ending with the given string."""
  title_ends_with: String

  """All values not ending with the given string."""
  title_not_ends_with: String
  text: String

  """All values that are not equal to given value."""
  text_not: String

  """All values that are contained in given list."""
  text_in: [String!]

  """All values that are not contained in given list."""
  text_not_in: [String!]

  """All values less than the given value."""
  text_lt: String

  """All values less than or equal the given value."""
  text_lte: String

  """All values greater than the given value."""
  text_gt: String

  """All values greater than or equal the given value."""
  text_gte: String

  """All values containing the given string."""
  text_contains: String

  """All values not containing the given string."""
  text_not_contains: String

  """All values starting with the given string."""
  text_starts_with: String

  """All values not starting with the given string."""
  text_not_starts_with: String

  """All values ending with the given string."""
  text_ends_with: String

  """All values not ending with the given string."""
  text_not_ends_with: String
  author: UserWhereInput
}

input PostWhereUniqueInput {
  id: ID
}

type Priority implements Node {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  createdBy(where: UserWhereInput): User!
  name: String
  description: String
}

"""A connection to a list of items."""
type PriorityConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [PriorityEdge]!
  aggregate: AggregatePriority!
}

input PriorityCreateInput {
  name: String
  description: String
  createdBy: UserCreateOneInput!
}

input PriorityCreateOneInput {
  create: PriorityCreateInput
  connect: PriorityWhereUniqueInput
}

"""An edge in a connection."""
type PriorityEdge {
  """The item at the end of the edge."""
  node: Priority!

  """A cursor for use in pagination."""
  cursor: String!
}

enum PriorityOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  name_ASC
  name_DESC
  description_ASC
  description_DESC
}

type PriorityPreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  name: String
  description: String
}

type PrioritySubscriptionPayload {
  mutation: MutationType!
  node: Priority
  updatedFields: [String!]
  previousValues: PriorityPreviousValues
}

input PrioritySubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [PrioritySubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [PrioritySubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [PrioritySubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: PriorityWhereInput
}

input PriorityUpdateDataInput {
  name: String
  description: String
  createdBy: UserUpdateOneInput
}

input PriorityUpdateInput {
  name: String
  description: String
  createdBy: UserUpdateOneInput
}

input PriorityUpdateOneInput {
  create: PriorityCreateInput
  connect: PriorityWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: PriorityUpdateDataInput
  upsert: PriorityUpsertNestedInput
}

input PriorityUpsertNestedInput {
  update: PriorityUpdateDataInput!
  create: PriorityCreateInput!
}

input PriorityWhereInput {
  """Logical AND on all given filters."""
  AND: [PriorityWhereInput!]

  """Logical OR on all given filters."""
  OR: [PriorityWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [PriorityWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  description: String

  """All values that are not equal to given value."""
  description_not: String

  """All values that are contained in given list."""
  description_in: [String!]

  """All values that are not contained in given list."""
  description_not_in: [String!]

  """All values less than the given value."""
  description_lt: String

  """All values less than or equal the given value."""
  description_lte: String

  """All values greater than the given value."""
  description_gt: String

  """All values greater than or equal the given value."""
  description_gte: String

  """All values containing the given string."""
  description_contains: String

  """All values not containing the given string."""
  description_not_contains: String

  """All values starting with the given string."""
  description_starts_with: String

  """All values not starting with the given string."""
  description_not_starts_with: String

  """All values ending with the given string."""
  description_ends_with: String

  """All values not ending with the given string."""
  description_not_ends_with: String
  createdBy: UserWhereInput
}

input PriorityWhereUniqueInput {
  id: ID
}

type Query {
  pictures(where: PictureWhereInput, orderBy: PictureOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Picture]!
  categories(where: CategoryWhereInput, orderBy: CategoryOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Category]!
  posts(where: PostWhereInput, orderBy: PostOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Post]!
  statusUpdates(where: StatusUpdateWhereInput, orderBy: StatusUpdateOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [StatusUpdate]!
  reminders(where: ReminderWhereInput, orderBy: ReminderOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Reminder]!
  events(where: EventWhereInput, orderBy: EventOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Event]!
  messages(where: MessageWhereInput, orderBy: MessageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Message]!
  notifications(where: NotificationWhereInput, orderBy: NotificationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Notification]!
  payments(where: PaymentWhereInput, orderBy: PaymentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Payment]!
  paymentAccounts(where: PaymentAccountWhereInput, orderBy: PaymentAccountOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [PaymentAccount]!
  paypalInformations(where: PaypalInformationWhereInput, orderBy: PaypalInformationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [PaypalInformation]!
  creditCardInformations(where: CreditCardInformationWhereInput, orderBy: CreditCardInformationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [CreditCardInformation]!
  priorities(where: PriorityWhereInput, orderBy: PriorityOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Priority]!
  cities(where: CityWhereInput, orderBy: CityOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [City]!
  tasks(where: TaskWhereInput, orderBy: TaskOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Task]!
  tags(where: TagWhereInput, orderBy: TagOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Tag]!
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  locations(where: LocationWhereInput, orderBy: LocationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Location]!
  files(where: FileWhereInput, orderBy: FileOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [File]!
  category(where: CategoryWhereUniqueInput!): Category
  post(where: PostWhereUniqueInput!): Post
  statusUpdate(where: StatusUpdateWhereUniqueInput!): StatusUpdate
  reminder(where: ReminderWhereUniqueInput!): Reminder
  event(where: EventWhereUniqueInput!): Event
  message(where: MessageWhereUniqueInput!): Message
  notification(where: NotificationWhereUniqueInput!): Notification
  payment(where: PaymentWhereUniqueInput!): Payment
  paymentAccount(where: PaymentAccountWhereUniqueInput!): PaymentAccount
  paypalInformation(where: PaypalInformationWhereUniqueInput!): PaypalInformation
  creditCardInformation(where: CreditCardInformationWhereUniqueInput!): CreditCardInformation
  priority(where: PriorityWhereUniqueInput!): Priority
  city(where: CityWhereUniqueInput!): City
  task(where: TaskWhereUniqueInput!): Task
  user(where: UserWhereUniqueInput!): User
  location(where: LocationWhereUniqueInput!): Location
  file(where: FileWhereUniqueInput!): File
  picturesConnection(where: PictureWhereInput, orderBy: PictureOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): PictureConnection!
  categoriesConnection(where: CategoryWhereInput, orderBy: CategoryOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): CategoryConnection!
  postsConnection(where: PostWhereInput, orderBy: PostOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): PostConnection!
  statusUpdatesConnection(where: StatusUpdateWhereInput, orderBy: StatusUpdateOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): StatusUpdateConnection!
  remindersConnection(where: ReminderWhereInput, orderBy: ReminderOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ReminderConnection!
  eventsConnection(where: EventWhereInput, orderBy: EventOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): EventConnection!
  messagesConnection(where: MessageWhereInput, orderBy: MessageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): MessageConnection!
  notificationsConnection(where: NotificationWhereInput, orderBy: NotificationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): NotificationConnection!
  paymentsConnection(where: PaymentWhereInput, orderBy: PaymentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): PaymentConnection!
  paymentAccountsConnection(where: PaymentAccountWhereInput, orderBy: PaymentAccountOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): PaymentAccountConnection!
  paypalInformationsConnection(where: PaypalInformationWhereInput, orderBy: PaypalInformationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): PaypalInformationConnection!
  creditCardInformationsConnection(where: CreditCardInformationWhereInput, orderBy: CreditCardInformationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): CreditCardInformationConnection!
  prioritiesConnection(where: PriorityWhereInput, orderBy: PriorityOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): PriorityConnection!
  citiesConnection(where: CityWhereInput, orderBy: CityOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): CityConnection!
  tasksConnection(where: TaskWhereInput, orderBy: TaskOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): TaskConnection!
  tagsConnection(where: TagWhereInput, orderBy: TagOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): TagConnection!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  locationsConnection(where: LocationWhereInput, orderBy: LocationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): LocationConnection!
  filesConnection(where: FileWhereInput, orderBy: FileOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): FileConnection!

  """Fetches an object given its ID"""
  node(
    """The ID of an object"""
    id: ID!
  ): Node
}

type Reminder implements Node {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  createdBy(where: UserWhereInput): User!
  title: String!
  description: String!
}

"""A connection to a list of items."""
type ReminderConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [ReminderEdge]!
  aggregate: AggregateReminder!
}

input ReminderCreateInput {
  title: String!
  description: String!
  createdBy: UserCreateOneInput!
}

"""An edge in a connection."""
type ReminderEdge {
  """The item at the end of the edge."""
  node: Reminder!

  """A cursor for use in pagination."""
  cursor: String!
}

enum ReminderOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  title_ASC
  title_DESC
  description_ASC
  description_DESC
}

type ReminderPreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  title: String!
  description: String!
}

type ReminderSubscriptionPayload {
  mutation: MutationType!
  node: Reminder
  updatedFields: [String!]
  previousValues: ReminderPreviousValues
}

input ReminderSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [ReminderSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [ReminderSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [ReminderSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: ReminderWhereInput
}

input ReminderUpdateInput {
  title: String
  description: String
  createdBy: UserUpdateOneInput
}

input ReminderWhereInput {
  """Logical AND on all given filters."""
  AND: [ReminderWhereInput!]

  """Logical OR on all given filters."""
  OR: [ReminderWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [ReminderWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  title: String

  """All values that are not equal to given value."""
  title_not: String

  """All values that are contained in given list."""
  title_in: [String!]

  """All values that are not contained in given list."""
  title_not_in: [String!]

  """All values less than the given value."""
  title_lt: String

  """All values less than or equal the given value."""
  title_lte: String

  """All values greater than the given value."""
  title_gt: String

  """All values greater than or equal the given value."""
  title_gte: String

  """All values containing the given string."""
  title_contains: String

  """All values not containing the given string."""
  title_not_contains: String

  """All values starting with the given string."""
  title_starts_with: String

  """All values not starting with the given string."""
  title_not_starts_with: String

  """All values ending with the given string."""
  title_ends_with: String

  """All values not ending with the given string."""
  title_not_ends_with: String
  description: String

  """All values that are not equal to given value."""
  description_not: String

  """All values that are contained in given list."""
  description_in: [String!]

  """All values that are not contained in given list."""
  description_not_in: [String!]

  """All values less than the given value."""
  description_lt: String

  """All values less than or equal the given value."""
  description_lte: String

  """All values greater than the given value."""
  description_gt: String

  """All values greater than or equal the given value."""
  description_gte: String

  """All values containing the given string."""
  description_contains: String

  """All values not containing the given string."""
  description_not_contains: String

  """All values starting with the given string."""
  description_starts_with: String

  """All values not starting with the given string."""
  description_not_starts_with: String

  """All values ending with the given string."""
  description_ends_with: String

  """All values not ending with the given string."""
  description_not_ends_with: String
  createdBy: UserWhereInput
}

input ReminderWhereUniqueInput {
  id: ID
}

enum Role {
  ADMIN
  CUSTOMER
}

type StatusUpdate implements Node {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  createdBy(where: UserWhereInput): User!
  task(where: TaskWhereInput): Task!
  text: String!
  previousStatus: String!
  newStatus: String!
}

"""A connection to a list of items."""
type StatusUpdateConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [StatusUpdateEdge]!
  aggregate: AggregateStatusUpdate!
}

input StatusUpdateCreateInput {
  text: String!
  previousStatus: String!
  newStatus: String!
  createdBy: UserCreateOneInput!
  task: TaskCreateOneInput!
}

"""An edge in a connection."""
type StatusUpdateEdge {
  """The item at the end of the edge."""
  node: StatusUpdate!

  """A cursor for use in pagination."""
  cursor: String!
}

enum StatusUpdateOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  text_ASC
  text_DESC
  previousStatus_ASC
  previousStatus_DESC
  newStatus_ASC
  newStatus_DESC
}

type StatusUpdatePreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  text: String!
  previousStatus: String!
  newStatus: String!
}

type StatusUpdateSubscriptionPayload {
  mutation: MutationType!
  node: StatusUpdate
  updatedFields: [String!]
  previousValues: StatusUpdatePreviousValues
}

input StatusUpdateSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [StatusUpdateSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [StatusUpdateSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [StatusUpdateSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: StatusUpdateWhereInput
}

input StatusUpdateUpdateInput {
  text: String
  previousStatus: String
  newStatus: String
  createdBy: UserUpdateOneInput
  task: TaskUpdateOneInput
}

input StatusUpdateWhereInput {
  """Logical AND on all given filters."""
  AND: [StatusUpdateWhereInput!]

  """Logical OR on all given filters."""
  OR: [StatusUpdateWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [StatusUpdateWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  text: String

  """All values that are not equal to given value."""
  text_not: String

  """All values that are contained in given list."""
  text_in: [String!]

  """All values that are not contained in given list."""
  text_not_in: [String!]

  """All values less than the given value."""
  text_lt: String

  """All values less than or equal the given value."""
  text_lte: String

  """All values greater than the given value."""
  text_gt: String

  """All values greater than or equal the given value."""
  text_gte: String

  """All values containing the given string."""
  text_contains: String

  """All values not containing the given string."""
  text_not_contains: String

  """All values starting with the given string."""
  text_starts_with: String

  """All values not starting with the given string."""
  text_not_starts_with: String

  """All values ending with the given string."""
  text_ends_with: String

  """All values not ending with the given string."""
  text_not_ends_with: String
  previousStatus: String

  """All values that are not equal to given value."""
  previousStatus_not: String

  """All values that are contained in given list."""
  previousStatus_in: [String!]

  """All values that are not contained in given list."""
  previousStatus_not_in: [String!]

  """All values less than the given value."""
  previousStatus_lt: String

  """All values less than or equal the given value."""
  previousStatus_lte: String

  """All values greater than the given value."""
  previousStatus_gt: String

  """All values greater than or equal the given value."""
  previousStatus_gte: String

  """All values containing the given string."""
  previousStatus_contains: String

  """All values not containing the given string."""
  previousStatus_not_contains: String

  """All values starting with the given string."""
  previousStatus_starts_with: String

  """All values not starting with the given string."""
  previousStatus_not_starts_with: String

  """All values ending with the given string."""
  previousStatus_ends_with: String

  """All values not ending with the given string."""
  previousStatus_not_ends_with: String
  newStatus: String

  """All values that are not equal to given value."""
  newStatus_not: String

  """All values that are contained in given list."""
  newStatus_in: [String!]

  """All values that are not contained in given list."""
  newStatus_not_in: [String!]

  """All values less than the given value."""
  newStatus_lt: String

  """All values less than or equal the given value."""
  newStatus_lte: String

  """All values greater than the given value."""
  newStatus_gt: String

  """All values greater than or equal the given value."""
  newStatus_gte: String

  """All values containing the given string."""
  newStatus_contains: String

  """All values not containing the given string."""
  newStatus_not_contains: String

  """All values starting with the given string."""
  newStatus_starts_with: String

  """All values not starting with the given string."""
  newStatus_not_starts_with: String

  """All values ending with the given string."""
  newStatus_ends_with: String

  """All values not ending with the given string."""
  newStatus_not_ends_with: String
  createdBy: UserWhereInput
  task: TaskWhereInput
}

input StatusUpdateWhereUniqueInput {
  id: ID
}

type Subscription {
  picture(where: PictureSubscriptionWhereInput): PictureSubscriptionPayload
  category(where: CategorySubscriptionWhereInput): CategorySubscriptionPayload
  post(where: PostSubscriptionWhereInput): PostSubscriptionPayload
  statusUpdate(where: StatusUpdateSubscriptionWhereInput): StatusUpdateSubscriptionPayload
  reminder(where: ReminderSubscriptionWhereInput): ReminderSubscriptionPayload
  event(where: EventSubscriptionWhereInput): EventSubscriptionPayload
  message(where: MessageSubscriptionWhereInput): MessageSubscriptionPayload
  notification(where: NotificationSubscriptionWhereInput): NotificationSubscriptionPayload
  payment(where: PaymentSubscriptionWhereInput): PaymentSubscriptionPayload
  paymentAccount(where: PaymentAccountSubscriptionWhereInput): PaymentAccountSubscriptionPayload
  paypalInformation(where: PaypalInformationSubscriptionWhereInput): PaypalInformationSubscriptionPayload
  creditCardInformation(where: CreditCardInformationSubscriptionWhereInput): CreditCardInformationSubscriptionPayload
  priority(where: PrioritySubscriptionWhereInput): PrioritySubscriptionPayload
  city(where: CitySubscriptionWhereInput): CitySubscriptionPayload
  task(where: TaskSubscriptionWhereInput): TaskSubscriptionPayload
  tag(where: TagSubscriptionWhereInput): TagSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
  location(where: LocationSubscriptionWhereInput): LocationSubscriptionPayload
  file(where: FileSubscriptionWhereInput): FileSubscriptionPayload
}

type Tag {
  name: String!
  description: String
  color: String!
}

"""A connection to a list of items."""
type TagConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [TagEdge]!
  aggregate: AggregateTag!
}

input TagCreateInput {
  name: String!
  description: String
  color: String!
}

input TagCreateManyInput {
  create: [TagCreateInput!]
}

"""An edge in a connection."""
type TagEdge {
  """The item at the end of the edge."""
  node: Tag!

  """A cursor for use in pagination."""
  cursor: String!
}

enum TagOrderByInput {
  name_ASC
  name_DESC
  description_ASC
  description_DESC
  color_ASC
  color_DESC
  id_ASC
  id_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type TagPreviousValues {
  name: String!
  description: String
  color: String!
}

type TagSubscriptionPayload {
  mutation: MutationType!
  node: Tag
  updatedFields: [String!]
  previousValues: TagPreviousValues
}

input TagSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [TagSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [TagSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [TagSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: TagWhereInput
}

input TagUpdateInput {
  name: String
  description: String
  color: String
}

input TagUpdateManyInput {
  create: [TagCreateInput!]
}

input TagWhereInput {
  """Logical AND on all given filters."""
  AND: [TagWhereInput!]

  """Logical OR on all given filters."""
  OR: [TagWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [TagWhereInput!]
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  description: String

  """All values that are not equal to given value."""
  description_not: String

  """All values that are contained in given list."""
  description_in: [String!]

  """All values that are not contained in given list."""
  description_not_in: [String!]

  """All values less than the given value."""
  description_lt: String

  """All values less than or equal the given value."""
  description_lte: String

  """All values greater than the given value."""
  description_gt: String

  """All values greater than or equal the given value."""
  description_gte: String

  """All values containing the given string."""
  description_contains: String

  """All values not containing the given string."""
  description_not_contains: String

  """All values starting with the given string."""
  description_starts_with: String

  """All values not starting with the given string."""
  description_not_starts_with: String

  """All values ending with the given string."""
  description_ends_with: String

  """All values not ending with the given string."""
  description_not_ends_with: String
  color: String

  """All values that are not equal to given value."""
  color_not: String

  """All values that are contained in given list."""
  color_in: [String!]

  """All values that are not contained in given list."""
  color_not_in: [String!]

  """All values less than the given value."""
  color_lt: String

  """All values less than or equal the given value."""
  color_lte: String

  """All values greater than the given value."""
  color_gt: String

  """All values greater than or equal the given value."""
  color_gte: String

  """All values containing the given string."""
  color_contains: String

  """All values not containing the given string."""
  color_not_contains: String

  """All values starting with the given string."""
  color_starts_with: String

  """All values not starting with the given string."""
  color_not_starts_with: String

  """All values ending with the given string."""
  color_ends_with: String

  """All values not ending with the given string."""
  color_not_ends_with: String
}

type Task implements Node {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  createdBy(where: UserWhereInput): User!
  categories(where: CategoryWhereInput, orderBy: CategoryOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Category!]
  title: String
  description: String
  startDate: DateTime
  finishDate: DateTime
  isComplete: Boolean!
  duration: Int
  priority(where: PriorityWhereInput): Priority
  subTasks(where: TaskWhereInput, orderBy: TaskOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Task!]
  status: TASK_STATUS
  tags(where: TagWhereInput, orderBy: TagOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Tag!]
  attachments(where: FileWhereInput, orderBy: FileOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [File!]
}

enum TASK_STATUS {
  PENDING
  IN_PROCESS
  BLOCKED
  COMPLETED
}

"""A connection to a list of items."""
type TaskConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [TaskEdge]!
  aggregate: AggregateTask!
}

input TaskCreateInput {
  title: String
  description: String
  startDate: DateTime
  finishDate: DateTime
  isComplete: Boolean
  duration: Int
  status: TASK_STATUS
  createdBy: UserCreateOneWithoutTasksInput!
  categories: CategoryCreateManyWithoutTasksInput
  priority: PriorityCreateOneInput
  subTasks: TaskCreateManyInput
  tags: TagCreateManyInput
  attachments: FileCreateManyInput
}

input TaskCreateManyInput {
  create: [TaskCreateInput!]
  connect: [TaskWhereUniqueInput!]
}

input TaskCreateManyWithoutCategoriesInput {
  create: [TaskCreateWithoutCategoriesInput!]
  connect: [TaskWhereUniqueInput!]
}

input TaskCreateManyWithoutCreatedByInput {
  create: [TaskCreateWithoutCreatedByInput!]
  connect: [TaskWhereUniqueInput!]
}

input TaskCreateOneInput {
  create: TaskCreateInput
  connect: TaskWhereUniqueInput
}

input TaskCreateWithoutCategoriesInput {
  title: String
  description: String
  startDate: DateTime
  finishDate: DateTime
  isComplete: Boolean
  duration: Int
  status: TASK_STATUS
  createdBy: UserCreateOneWithoutTasksInput!
  priority: PriorityCreateOneInput
  subTasks: TaskCreateManyInput
  tags: TagCreateManyInput
  attachments: FileCreateManyInput
}

input TaskCreateWithoutCreatedByInput {
  title: String
  description: String
  startDate: DateTime
  finishDate: DateTime
  isComplete: Boolean
  duration: Int
  status: TASK_STATUS
  categories: CategoryCreateManyWithoutTasksInput
  priority: PriorityCreateOneInput
  subTasks: TaskCreateManyInput
  tags: TagCreateManyInput
  attachments: FileCreateManyInput
}

"""An edge in a connection."""
type TaskEdge {
  """The item at the end of the edge."""
  node: Task!

  """A cursor for use in pagination."""
  cursor: String!
}

enum TaskOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  title_ASC
  title_DESC
  description_ASC
  description_DESC
  startDate_ASC
  startDate_DESC
  finishDate_ASC
  finishDate_DESC
  isComplete_ASC
  isComplete_DESC
  duration_ASC
  duration_DESC
  status_ASC
  status_DESC
}

type TaskPreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  title: String
  description: String
  startDate: DateTime
  finishDate: DateTime
  isComplete: Boolean!
  duration: Int
  status: TASK_STATUS
}

type TaskSubscriptionPayload {
  mutation: MutationType!
  node: Task
  updatedFields: [String!]
  previousValues: TaskPreviousValues
}

input TaskSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [TaskSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [TaskSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [TaskSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: TaskWhereInput
}

input TaskUpdateDataInput {
  title: String
  description: String
  startDate: DateTime
  finishDate: DateTime
  isComplete: Boolean
  duration: Int
  status: TASK_STATUS
  createdBy: UserUpdateOneWithoutTasksInput
  categories: CategoryUpdateManyWithoutTasksInput
  priority: PriorityUpdateOneInput
  subTasks: TaskUpdateManyInput
  tags: TagUpdateManyInput
  attachments: FileUpdateManyInput
}

input TaskUpdateInput {
  title: String
  description: String
  startDate: DateTime
  finishDate: DateTime
  isComplete: Boolean
  duration: Int
  status: TASK_STATUS
  createdBy: UserUpdateOneWithoutTasksInput
  categories: CategoryUpdateManyWithoutTasksInput
  priority: PriorityUpdateOneInput
  subTasks: TaskUpdateManyInput
  tags: TagUpdateManyInput
  attachments: FileUpdateManyInput
}

input TaskUpdateManyInput {
  create: [TaskCreateInput!]
  connect: [TaskWhereUniqueInput!]
  disconnect: [TaskWhereUniqueInput!]
  delete: [TaskWhereUniqueInput!]
  update: [TaskUpdateWithWhereUniqueNestedInput!]
  upsert: [TaskUpsertWithWhereUniqueNestedInput!]
}

input TaskUpdateManyWithoutCategoriesInput {
  create: [TaskCreateWithoutCategoriesInput!]
  connect: [TaskWhereUniqueInput!]
  disconnect: [TaskWhereUniqueInput!]
  delete: [TaskWhereUniqueInput!]
  update: [TaskUpdateWithWhereUniqueWithoutCategoriesInput!]
  upsert: [TaskUpsertWithWhereUniqueWithoutCategoriesInput!]
}

input TaskUpdateManyWithoutCreatedByInput {
  create: [TaskCreateWithoutCreatedByInput!]
  connect: [TaskWhereUniqueInput!]
  disconnect: [TaskWhereUniqueInput!]
  delete: [TaskWhereUniqueInput!]
  update: [TaskUpdateWithWhereUniqueWithoutCreatedByInput!]
  upsert: [TaskUpsertWithWhereUniqueWithoutCreatedByInput!]
}

input TaskUpdateOneInput {
  create: TaskCreateInput
  connect: TaskWhereUniqueInput
  delete: Boolean
  update: TaskUpdateDataInput
  upsert: TaskUpsertNestedInput
}

input TaskUpdateWithoutCategoriesDataInput {
  title: String
  description: String
  startDate: DateTime
  finishDate: DateTime
  isComplete: Boolean
  duration: Int
  status: TASK_STATUS
  createdBy: UserUpdateOneWithoutTasksInput
  priority: PriorityUpdateOneInput
  subTasks: TaskUpdateManyInput
  tags: TagUpdateManyInput
  attachments: FileUpdateManyInput
}

input TaskUpdateWithoutCreatedByDataInput {
  title: String
  description: String
  startDate: DateTime
  finishDate: DateTime
  isComplete: Boolean
  duration: Int
  status: TASK_STATUS
  categories: CategoryUpdateManyWithoutTasksInput
  priority: PriorityUpdateOneInput
  subTasks: TaskUpdateManyInput
  tags: TagUpdateManyInput
  attachments: FileUpdateManyInput
}

input TaskUpdateWithWhereUniqueNestedInput {
  where: TaskWhereUniqueInput!
  data: TaskUpdateDataInput!
}

input TaskUpdateWithWhereUniqueWithoutCategoriesInput {
  where: TaskWhereUniqueInput!
  data: TaskUpdateWithoutCategoriesDataInput!
}

input TaskUpdateWithWhereUniqueWithoutCreatedByInput {
  where: TaskWhereUniqueInput!
  data: TaskUpdateWithoutCreatedByDataInput!
}

input TaskUpsertNestedInput {
  update: TaskUpdateDataInput!
  create: TaskCreateInput!
}

input TaskUpsertWithWhereUniqueNestedInput {
  where: TaskWhereUniqueInput!
  update: TaskUpdateDataInput!
  create: TaskCreateInput!
}

input TaskUpsertWithWhereUniqueWithoutCategoriesInput {
  where: TaskWhereUniqueInput!
  update: TaskUpdateWithoutCategoriesDataInput!
  create: TaskCreateWithoutCategoriesInput!
}

input TaskUpsertWithWhereUniqueWithoutCreatedByInput {
  where: TaskWhereUniqueInput!
  update: TaskUpdateWithoutCreatedByDataInput!
  create: TaskCreateWithoutCreatedByInput!
}

input TaskWhereInput {
  """Logical AND on all given filters."""
  AND: [TaskWhereInput!]

  """Logical OR on all given filters."""
  OR: [TaskWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [TaskWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  title: String

  """All values that are not equal to given value."""
  title_not: String

  """All values that are contained in given list."""
  title_in: [String!]

  """All values that are not contained in given list."""
  title_not_in: [String!]

  """All values less than the given value."""
  title_lt: String

  """All values less than or equal the given value."""
  title_lte: String

  """All values greater than the given value."""
  title_gt: String

  """All values greater than or equal the given value."""
  title_gte: String

  """All values containing the given string."""
  title_contains: String

  """All values not containing the given string."""
  title_not_contains: String

  """All values starting with the given string."""
  title_starts_with: String

  """All values not starting with the given string."""
  title_not_starts_with: String

  """All values ending with the given string."""
  title_ends_with: String

  """All values not ending with the given string."""
  title_not_ends_with: String
  description: String

  """All values that are not equal to given value."""
  description_not: String

  """All values that are contained in given list."""
  description_in: [String!]

  """All values that are not contained in given list."""
  description_not_in: [String!]

  """All values less than the given value."""
  description_lt: String

  """All values less than or equal the given value."""
  description_lte: String

  """All values greater than the given value."""
  description_gt: String

  """All values greater than or equal the given value."""
  description_gte: String

  """All values containing the given string."""
  description_contains: String

  """All values not containing the given string."""
  description_not_contains: String

  """All values starting with the given string."""
  description_starts_with: String

  """All values not starting with the given string."""
  description_not_starts_with: String

  """All values ending with the given string."""
  description_ends_with: String

  """All values not ending with the given string."""
  description_not_ends_with: String
  startDate: DateTime

  """All values that are not equal to given value."""
  startDate_not: DateTime

  """All values that are contained in given list."""
  startDate_in: [DateTime!]

  """All values that are not contained in given list."""
  startDate_not_in: [DateTime!]

  """All values less than the given value."""
  startDate_lt: DateTime

  """All values less than or equal the given value."""
  startDate_lte: DateTime

  """All values greater than the given value."""
  startDate_gt: DateTime

  """All values greater than or equal the given value."""
  startDate_gte: DateTime
  finishDate: DateTime

  """All values that are not equal to given value."""
  finishDate_not: DateTime

  """All values that are contained in given list."""
  finishDate_in: [DateTime!]

  """All values that are not contained in given list."""
  finishDate_not_in: [DateTime!]

  """All values less than the given value."""
  finishDate_lt: DateTime

  """All values less than or equal the given value."""
  finishDate_lte: DateTime

  """All values greater than the given value."""
  finishDate_gt: DateTime

  """All values greater than or equal the given value."""
  finishDate_gte: DateTime
  isComplete: Boolean

  """All values that are not equal to given value."""
  isComplete_not: Boolean
  duration: Int

  """All values that are not equal to given value."""
  duration_not: Int

  """All values that are contained in given list."""
  duration_in: [Int!]

  """All values that are not contained in given list."""
  duration_not_in: [Int!]

  """All values less than the given value."""
  duration_lt: Int

  """All values less than or equal the given value."""
  duration_lte: Int

  """All values greater than the given value."""
  duration_gt: Int

  """All values greater than or equal the given value."""
  duration_gte: Int
  status: TASK_STATUS

  """All values that are not equal to given value."""
  status_not: TASK_STATUS

  """All values that are contained in given list."""
  status_in: [TASK_STATUS!]

  """All values that are not contained in given list."""
  status_not_in: [TASK_STATUS!]
  createdBy: UserWhereInput
  categories_every: CategoryWhereInput
  categories_some: CategoryWhereInput
  categories_none: CategoryWhereInput
  priority: PriorityWhereInput
  subTasks_every: TaskWhereInput
  subTasks_some: TaskWhereInput
  subTasks_none: TaskWhereInput
  tags_every: TagWhereInput
  tags_some: TagWhereInput
  tags_none: TagWhereInput
  attachments_every: FileWhereInput
  attachments_some: FileWhereInput
  attachments_none: FileWhereInput
}

input TaskWhereUniqueInput {
  id: ID
}

type User implements Node {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  email: String!
  password: String!
  isAdmin: Boolean!
  role: Role!
  firstName: String
  lastName: String
  phone: String
  avatarColor: String
  tasks(where: TaskWhereInput, orderBy: TaskOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Task!]
  posts(where: PostWhereInput, orderBy: PostOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Post!]
  notifications(where: NotificationWhereInput, orderBy: NotificationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Notification!]
}

"""A connection to a list of items."""
type UserConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  email: String!
  password: String!
  isAdmin: Boolean
  role: Role
  firstName: String
  lastName: String
  phone: String
  avatarColor: String
  tasks: TaskCreateManyWithoutCreatedByInput
  posts: PostCreateManyWithoutAuthorInput
  notifications: NotificationCreateManyWithoutUserInput
}

input UserCreateOneInput {
  create: UserCreateInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutNotificationsInput {
  create: UserCreateWithoutNotificationsInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutPostsInput {
  create: UserCreateWithoutPostsInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutTasksInput {
  create: UserCreateWithoutTasksInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutNotificationsInput {
  email: String!
  password: String!
  isAdmin: Boolean
  role: Role
  firstName: String
  lastName: String
  phone: String
  avatarColor: String
  tasks: TaskCreateManyWithoutCreatedByInput
  posts: PostCreateManyWithoutAuthorInput
}

input UserCreateWithoutPostsInput {
  email: String!
  password: String!
  isAdmin: Boolean
  role: Role
  firstName: String
  lastName: String
  phone: String
  avatarColor: String
  tasks: TaskCreateManyWithoutCreatedByInput
  notifications: NotificationCreateManyWithoutUserInput
}

input UserCreateWithoutTasksInput {
  email: String!
  password: String!
  isAdmin: Boolean
  role: Role
  firstName: String
  lastName: String
  phone: String
  avatarColor: String
  posts: PostCreateManyWithoutAuthorInput
  notifications: NotificationCreateManyWithoutUserInput
}

"""An edge in a connection."""
type UserEdge {
  """The item at the end of the edge."""
  node: User!

  """A cursor for use in pagination."""
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  email_ASC
  email_DESC
  password_ASC
  password_DESC
  isAdmin_ASC
  isAdmin_DESC
  role_ASC
  role_DESC
  firstName_ASC
  firstName_DESC
  lastName_ASC
  lastName_DESC
  phone_ASC
  phone_DESC
  avatarColor_ASC
  avatarColor_DESC
}

type UserPreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  email: String!
  password: String!
  isAdmin: Boolean!
  role: Role!
  firstName: String
  lastName: String
  phone: String
  avatarColor: String
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [UserSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [UserSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [UserSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: UserWhereInput
}

input UserUpdateDataInput {
  email: String
  password: String
  isAdmin: Boolean
  role: Role
  firstName: String
  lastName: String
  phone: String
  avatarColor: String
  tasks: TaskUpdateManyWithoutCreatedByInput
  posts: PostUpdateManyWithoutAuthorInput
  notifications: NotificationUpdateManyWithoutUserInput
}

input UserUpdateInput {
  email: String
  password: String
  isAdmin: Boolean
  role: Role
  firstName: String
  lastName: String
  phone: String
  avatarColor: String
  tasks: TaskUpdateManyWithoutCreatedByInput
  posts: PostUpdateManyWithoutAuthorInput
  notifications: NotificationUpdateManyWithoutUserInput
}

input UserUpdateOneInput {
  create: UserCreateInput
  connect: UserWhereUniqueInput
  delete: Boolean
  update: UserUpdateDataInput
  upsert: UserUpsertNestedInput
}

input UserUpdateOneWithoutNotificationsInput {
  create: UserCreateWithoutNotificationsInput
  connect: UserWhereUniqueInput
  delete: Boolean
  update: UserUpdateWithoutNotificationsDataInput
  upsert: UserUpsertWithoutNotificationsInput
}

input UserUpdateOneWithoutPostsInput {
  create: UserCreateWithoutPostsInput
  connect: UserWhereUniqueInput
  delete: Boolean
  update: UserUpdateWithoutPostsDataInput
  upsert: UserUpsertWithoutPostsInput
}

input UserUpdateOneWithoutTasksInput {
  create: UserCreateWithoutTasksInput
  connect: UserWhereUniqueInput
  delete: Boolean
  update: UserUpdateWithoutTasksDataInput
  upsert: UserUpsertWithoutTasksInput
}

input UserUpdateWithoutNotificationsDataInput {
  email: String
  password: String
  isAdmin: Boolean
  role: Role
  firstName: String
  lastName: String
  phone: String
  avatarColor: String
  tasks: TaskUpdateManyWithoutCreatedByInput
  posts: PostUpdateManyWithoutAuthorInput
}

input UserUpdateWithoutPostsDataInput {
  email: String
  password: String
  isAdmin: Boolean
  role: Role
  firstName: String
  lastName: String
  phone: String
  avatarColor: String
  tasks: TaskUpdateManyWithoutCreatedByInput
  notifications: NotificationUpdateManyWithoutUserInput
}

input UserUpdateWithoutTasksDataInput {
  email: String
  password: String
  isAdmin: Boolean
  role: Role
  firstName: String
  lastName: String
  phone: String
  avatarColor: String
  posts: PostUpdateManyWithoutAuthorInput
  notifications: NotificationUpdateManyWithoutUserInput
}

input UserUpsertNestedInput {
  update: UserUpdateDataInput!
  create: UserCreateInput!
}

input UserUpsertWithoutNotificationsInput {
  update: UserUpdateWithoutNotificationsDataInput!
  create: UserCreateWithoutNotificationsInput!
}

input UserUpsertWithoutPostsInput {
  update: UserUpdateWithoutPostsDataInput!
  create: UserCreateWithoutPostsInput!
}

input UserUpsertWithoutTasksInput {
  update: UserUpdateWithoutTasksDataInput!
  create: UserCreateWithoutTasksInput!
}

input UserWhereInput {
  """Logical AND on all given filters."""
  AND: [UserWhereInput!]

  """Logical OR on all given filters."""
  OR: [UserWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [UserWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  email: String

  """All values that are not equal to given value."""
  email_not: String

  """All values that are contained in given list."""
  email_in: [String!]

  """All values that are not contained in given list."""
  email_not_in: [String!]

  """All values less than the given value."""
  email_lt: String

  """All values less than or equal the given value."""
  email_lte: String

  """All values greater than the given value."""
  email_gt: String

  """All values greater than or equal the given value."""
  email_gte: String

  """All values containing the given string."""
  email_contains: String

  """All values not containing the given string."""
  email_not_contains: String

  """All values starting with the given string."""
  email_starts_with: String

  """All values not starting with the given string."""
  email_not_starts_with: String

  """All values ending with the given string."""
  email_ends_with: String

  """All values not ending with the given string."""
  email_not_ends_with: String
  password: String

  """All values that are not equal to given value."""
  password_not: String

  """All values that are contained in given list."""
  password_in: [String!]

  """All values that are not contained in given list."""
  password_not_in: [String!]

  """All values less than the given value."""
  password_lt: String

  """All values less than or equal the given value."""
  password_lte: String

  """All values greater than the given value."""
  password_gt: String

  """All values greater than or equal the given value."""
  password_gte: String

  """All values containing the given string."""
  password_contains: String

  """All values not containing the given string."""
  password_not_contains: String

  """All values starting with the given string."""
  password_starts_with: String

  """All values not starting with the given string."""
  password_not_starts_with: String

  """All values ending with the given string."""
  password_ends_with: String

  """All values not ending with the given string."""
  password_not_ends_with: String
  isAdmin: Boolean

  """All values that are not equal to given value."""
  isAdmin_not: Boolean
  role: Role

  """All values that are not equal to given value."""
  role_not: Role

  """All values that are contained in given list."""
  role_in: [Role!]

  """All values that are not contained in given list."""
  role_not_in: [Role!]
  firstName: String

  """All values that are not equal to given value."""
  firstName_not: String

  """All values that are contained in given list."""
  firstName_in: [String!]

  """All values that are not contained in given list."""
  firstName_not_in: [String!]

  """All values less than the given value."""
  firstName_lt: String

  """All values less than or equal the given value."""
  firstName_lte: String

  """All values greater than the given value."""
  firstName_gt: String

  """All values greater than or equal the given value."""
  firstName_gte: String

  """All values containing the given string."""
  firstName_contains: String

  """All values not containing the given string."""
  firstName_not_contains: String

  """All values starting with the given string."""
  firstName_starts_with: String

  """All values not starting with the given string."""
  firstName_not_starts_with: String

  """All values ending with the given string."""
  firstName_ends_with: String

  """All values not ending with the given string."""
  firstName_not_ends_with: String
  lastName: String

  """All values that are not equal to given value."""
  lastName_not: String

  """All values that are contained in given list."""
  lastName_in: [String!]

  """All values that are not contained in given list."""
  lastName_not_in: [String!]

  """All values less than the given value."""
  lastName_lt: String

  """All values less than or equal the given value."""
  lastName_lte: String

  """All values greater than the given value."""
  lastName_gt: String

  """All values greater than or equal the given value."""
  lastName_gte: String

  """All values containing the given string."""
  lastName_contains: String

  """All values not containing the given string."""
  lastName_not_contains: String

  """All values starting with the given string."""
  lastName_starts_with: String

  """All values not starting with the given string."""
  lastName_not_starts_with: String

  """All values ending with the given string."""
  lastName_ends_with: String

  """All values not ending with the given string."""
  lastName_not_ends_with: String
  phone: String

  """All values that are not equal to given value."""
  phone_not: String

  """All values that are contained in given list."""
  phone_in: [String!]

  """All values that are not contained in given list."""
  phone_not_in: [String!]

  """All values less than the given value."""
  phone_lt: String

  """All values less than or equal the given value."""
  phone_lte: String

  """All values greater than the given value."""
  phone_gt: String

  """All values greater than or equal the given value."""
  phone_gte: String

  """All values containing the given string."""
  phone_contains: String

  """All values not containing the given string."""
  phone_not_contains: String

  """All values starting with the given string."""
  phone_starts_with: String

  """All values not starting with the given string."""
  phone_not_starts_with: String

  """All values ending with the given string."""
  phone_ends_with: String

  """All values not ending with the given string."""
  phone_not_ends_with: String
  avatarColor: String

  """All values that are not equal to given value."""
  avatarColor_not: String

  """All values that are contained in given list."""
  avatarColor_in: [String!]

  """All values that are not contained in given list."""
  avatarColor_not_in: [String!]

  """All values less than the given value."""
  avatarColor_lt: String

  """All values less than or equal the given value."""
  avatarColor_lte: String

  """All values greater than the given value."""
  avatarColor_gt: String

  """All values greater than or equal the given value."""
  avatarColor_gte: String

  """All values containing the given string."""
  avatarColor_contains: String

  """All values not containing the given string."""
  avatarColor_not_contains: String

  """All values starting with the given string."""
  avatarColor_starts_with: String

  """All values not starting with the given string."""
  avatarColor_not_starts_with: String

  """All values ending with the given string."""
  avatarColor_ends_with: String

  """All values not ending with the given string."""
  avatarColor_not_ends_with: String
  tasks_every: TaskWhereInput
  tasks_some: TaskWhereInput
  tasks_none: TaskWhereInput
  posts_every: PostWhereInput
  posts_some: PostWhereInput
  posts_none: PostWhereInput
  notifications_every: NotificationWhereInput
  notifications_some: NotificationWhereInput
  notifications_none: NotificationWhereInput
}

input UserWhereUniqueInput {
  id: ID
  email: String
}
`

export const Prisma = makePrismaBindingClass<BindingConstructor<Prisma>>({typeDefs})

/**
 * Types
*/

export type PaymentOrderByInput =   'id_ASC' |
  'id_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'serviceFee_ASC' |
  'serviceFee_DESC' |
  'placePrice_ASC' |
  'placePrice_DESC' |
  'totalPrice_ASC' |
  'totalPrice_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC'

export type TagOrderByInput =   'name_ASC' |
  'name_DESC' |
  'description_ASC' |
  'description_DESC' |
  'color_ASC' |
  'color_DESC' |
  'id_ASC' |
  'id_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type PAYMENT_PROVIDER =   'PAYPAL' |
  'CREDIT_CARD'

export type MutationType =   'CREATED' |
  'UPDATED' |
  'DELETED'

export type MessageOrderByInput =   'id_ASC' |
  'id_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'deliveredAt_ASC' |
  'deliveredAt_DESC' |
  'readAt_ASC' |
  'readAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC'

export type UserOrderByInput =   'id_ASC' |
  'id_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'email_ASC' |
  'email_DESC' |
  'password_ASC' |
  'password_DESC' |
  'isAdmin_ASC' |
  'isAdmin_DESC' |
  'role_ASC' |
  'role_DESC' |
  'firstName_ASC' |
  'firstName_DESC' |
  'lastName_ASC' |
  'lastName_DESC' |
  'phone_ASC' |
  'phone_DESC' |
  'avatarColor_ASC' |
  'avatarColor_DESC'

export type EventOrderByInput =   'id_ASC' |
  'id_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'title_ASC' |
  'title_DESC' |
  'description_ASC' |
  'description_DESC' |
  'date_ASC' |
  'date_DESC'

export type PriorityOrderByInput =   'id_ASC' |
  'id_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'name_ASC' |
  'name_DESC' |
  'description_ASC' |
  'description_DESC'

export type ReminderOrderByInput =   'id_ASC' |
  'id_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'title_ASC' |
  'title_DESC' |
  'description_ASC' |
  'description_DESC'

export type PaypalInformationOrderByInput =   'id_ASC' |
  'id_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'email_ASC' |
  'email_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC'

export type NOTIFICATION_TYPE =   'SIGNUP' |
  'TASK_DUE' |
  'TODAYS_TASKS' |
  'TASK' |
  'REMINDER' |
  'EVENT'

export type PaymentAccountOrderByInput =   'id_ASC' |
  'id_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'type_ASC' |
  'type_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC'

export type CategoryOrderByInput =   'id_ASC' |
  'id_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'name_ASC' |
  'name_DESC' |
  'description_ASC' |
  'description_DESC'

export type PictureOrderByInput =   'url_ASC' |
  'url_DESC' |
  'id_ASC' |
  'id_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type StatusUpdateOrderByInput =   'id_ASC' |
  'id_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'text_ASC' |
  'text_DESC' |
  'previousStatus_ASC' |
  'previousStatus_DESC' |
  'newStatus_ASC' |
  'newStatus_DESC'

export type CityOrderByInput =   'id_ASC' |
  'id_DESC' |
  'name_ASC' |
  'name_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type FileOrderByInput =   'id_ASC' |
  'id_DESC' |
  'name_ASC' |
  'name_DESC' |
  'size_ASC' |
  'size_DESC' |
  'secret_ASC' |
  'secret_DESC' |
  'contentType_ASC' |
  'contentType_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'url_ASC' |
  'url_DESC'

export type TaskOrderByInput =   'id_ASC' |
  'id_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'title_ASC' |
  'title_DESC' |
  'description_ASC' |
  'description_DESC' |
  'startDate_ASC' |
  'startDate_DESC' |
  'finishDate_ASC' |
  'finishDate_DESC' |
  'isComplete_ASC' |
  'isComplete_DESC' |
  'duration_ASC' |
  'duration_DESC' |
  'status_ASC' |
  'status_DESC'

export type PostOrderByInput =   'id_ASC' |
  'id_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'isPublished_ASC' |
  'isPublished_DESC' |
  'title_ASC' |
  'title_DESC' |
  'text_ASC' |
  'text_DESC'

export type NotificationOrderByInput =   'id_ASC' |
  'id_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'type_ASC' |
  'type_DESC' |
  'link_ASC' |
  'link_DESC' |
  'readDate_ASC' |
  'readDate_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC'

export type CreditCardInformationOrderByInput =   'id_ASC' |
  'id_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'cardNumber_ASC' |
  'cardNumber_DESC' |
  'expiresOnMonth_ASC' |
  'expiresOnMonth_DESC' |
  'expiresOnYear_ASC' |
  'expiresOnYear_DESC' |
  'securityCode_ASC' |
  'securityCode_DESC' |
  'firstName_ASC' |
  'firstName_DESC' |
  'lastName_ASC' |
  'lastName_DESC' |
  'postalCode_ASC' |
  'postalCode_DESC' |
  'country_ASC' |
  'country_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC'

export type LocationOrderByInput =   'id_ASC' |
  'id_DESC' |
  'lat_ASC' |
  'lat_DESC' |
  'lng_ASC' |
  'lng_DESC' |
  'address_ASC' |
  'address_DESC' |
  'directions_ASC' |
  'directions_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type TASK_STATUS =   'PENDING' |
  'IN_PROCESS' |
  'BLOCKED' |
  'COMPLETED'

export type Role =   'ADMIN' |
  'CUSTOMER'

export interface LocationCreateOneInput {
  create?: LocationCreateInput
  connect?: LocationWhereUniqueInput
}

export interface PictureWhereInput {
  AND?: PictureWhereInput[] | PictureWhereInput
  OR?: PictureWhereInput[] | PictureWhereInput
  NOT?: PictureWhereInput[] | PictureWhereInput
  url?: String
  url_not?: String
  url_in?: String[] | String
  url_not_in?: String[] | String
  url_lt?: String
  url_lte?: String
  url_gt?: String
  url_gte?: String
  url_contains?: String
  url_not_contains?: String
  url_starts_with?: String
  url_not_starts_with?: String
  url_ends_with?: String
  url_not_ends_with?: String
}

export interface ReminderUpdateInput {
  title?: String
  description?: String
  createdBy?: UserUpdateOneInput
}

export interface TagUpdateManyInput {
  create?: TagCreateInput[] | TagCreateInput
}

export interface TaskUpsertNestedInput {
  update: TaskUpdateDataInput
  create: TaskCreateInput
}

export interface CreditCardInformationCreateOneWithoutPaymentAccountInput {
  create?: CreditCardInformationCreateWithoutPaymentAccountInput
  connect?: CreditCardInformationWhereUniqueInput
}

export interface TaskUpdateOneInput {
  create?: TaskCreateInput
  connect?: TaskWhereUniqueInput
  delete?: Boolean
  update?: TaskUpdateDataInput
  upsert?: TaskUpsertNestedInput
}

export interface LocationSubscriptionWhereInput {
  AND?: LocationSubscriptionWhereInput[] | LocationSubscriptionWhereInput
  OR?: LocationSubscriptionWhereInput[] | LocationSubscriptionWhereInput
  NOT?: LocationSubscriptionWhereInput[] | LocationSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: LocationWhereInput
}

export interface StatusUpdateUpdateInput {
  text?: String
  previousStatus?: String
  newStatus?: String
  createdBy?: UserUpdateOneInput
  task?: TaskUpdateOneInput
}

export interface TagSubscriptionWhereInput {
  AND?: TagSubscriptionWhereInput[] | TagSubscriptionWhereInput
  OR?: TagSubscriptionWhereInput[] | TagSubscriptionWhereInput
  NOT?: TagSubscriptionWhereInput[] | TagSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: TagWhereInput
}

export interface UserUpsertWithoutPostsInput {
  update: UserUpdateWithoutPostsDataInput
  create: UserCreateWithoutPostsInput
}

export interface TaskSubscriptionWhereInput {
  AND?: TaskSubscriptionWhereInput[] | TaskSubscriptionWhereInput
  OR?: TaskSubscriptionWhereInput[] | TaskSubscriptionWhereInput
  NOT?: TaskSubscriptionWhereInput[] | TaskSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: TaskWhereInput
}

export interface UserUpdateWithoutPostsDataInput {
  email?: String
  password?: String
  isAdmin?: Boolean
  role?: Role
  firstName?: String
  lastName?: String
  phone?: String
  avatarColor?: String
  tasks?: TaskUpdateManyWithoutCreatedByInput
  notifications?: NotificationUpdateManyWithoutUserInput
}

export interface CitySubscriptionWhereInput {
  AND?: CitySubscriptionWhereInput[] | CitySubscriptionWhereInput
  OR?: CitySubscriptionWhereInput[] | CitySubscriptionWhereInput
  NOT?: CitySubscriptionWhereInput[] | CitySubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: CityWhereInput
}

export interface UserUpdateOneWithoutPostsInput {
  create?: UserCreateWithoutPostsInput
  connect?: UserWhereUniqueInput
  delete?: Boolean
  update?: UserUpdateWithoutPostsDataInput
  upsert?: UserUpsertWithoutPostsInput
}

export interface ReminderWhereInput {
  AND?: ReminderWhereInput[] | ReminderWhereInput
  OR?: ReminderWhereInput[] | ReminderWhereInput
  NOT?: ReminderWhereInput[] | ReminderWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  createdAt?: DateTime
  createdAt_not?: DateTime
  createdAt_in?: DateTime[] | DateTime
  createdAt_not_in?: DateTime[] | DateTime
  createdAt_lt?: DateTime
  createdAt_lte?: DateTime
  createdAt_gt?: DateTime
  createdAt_gte?: DateTime
  updatedAt?: DateTime
  updatedAt_not?: DateTime
  updatedAt_in?: DateTime[] | DateTime
  updatedAt_not_in?: DateTime[] | DateTime
  updatedAt_lt?: DateTime
  updatedAt_lte?: DateTime
  updatedAt_gt?: DateTime
  updatedAt_gte?: DateTime
  title?: String
  title_not?: String
  title_in?: String[] | String
  title_not_in?: String[] | String
  title_lt?: String
  title_lte?: String
  title_gt?: String
  title_gte?: String
  title_contains?: String
  title_not_contains?: String
  title_starts_with?: String
  title_not_starts_with?: String
  title_ends_with?: String
  title_not_ends_with?: String
  description?: String
  description_not?: String
  description_in?: String[] | String
  description_not_in?: String[] | String
  description_lt?: String
  description_lte?: String
  description_gt?: String
  description_gte?: String
  description_contains?: String
  description_not_contains?: String
  description_starts_with?: String
  description_not_starts_with?: String
  description_ends_with?: String
  description_not_ends_with?: String
  createdBy?: UserWhereInput
}

export interface PostUpdateInput {
  isPublished?: Boolean
  title?: String
  text?: String
  author?: UserUpdateOneWithoutPostsInput
}

export interface CreditCardInformationSubscriptionWhereInput {
  AND?: CreditCardInformationSubscriptionWhereInput[] | CreditCardInformationSubscriptionWhereInput
  OR?: CreditCardInformationSubscriptionWhereInput[] | CreditCardInformationSubscriptionWhereInput
  NOT?: CreditCardInformationSubscriptionWhereInput[] | CreditCardInformationSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: CreditCardInformationWhereInput
}

export interface TaskUpsertWithWhereUniqueWithoutCategoriesInput {
  where: TaskWhereUniqueInput
  update: TaskUpdateWithoutCategoriesDataInput
  create: TaskCreateWithoutCategoriesInput
}

export interface LocationWhereInput {
  AND?: LocationWhereInput[] | LocationWhereInput
  OR?: LocationWhereInput[] | LocationWhereInput
  NOT?: LocationWhereInput[] | LocationWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  lat?: Float
  lat_not?: Float
  lat_in?: Float[] | Float
  lat_not_in?: Float[] | Float
  lat_lt?: Float
  lat_lte?: Float
  lat_gt?: Float
  lat_gte?: Float
  lng?: Float
  lng_not?: Float
  lng_in?: Float[] | Float
  lng_not_in?: Float[] | Float
  lng_lt?: Float
  lng_lte?: Float
  lng_gt?: Float
  lng_gte?: Float
  address?: String
  address_not?: String
  address_in?: String[] | String
  address_not_in?: String[] | String
  address_lt?: String
  address_lte?: String
  address_gt?: String
  address_gte?: String
  address_contains?: String
  address_not_contains?: String
  address_starts_with?: String
  address_not_starts_with?: String
  address_ends_with?: String
  address_not_ends_with?: String
  directions?: String
  directions_not?: String
  directions_in?: String[] | String
  directions_not_in?: String[] | String
  directions_lt?: String
  directions_lte?: String
  directions_gt?: String
  directions_gte?: String
  directions_contains?: String
  directions_not_contains?: String
  directions_starts_with?: String
  directions_not_starts_with?: String
  directions_ends_with?: String
  directions_not_ends_with?: String
  city?: CityWhereInput
}

export interface TaskUpdateWithoutCategoriesDataInput {
  title?: String
  description?: String
  startDate?: DateTime
  finishDate?: DateTime
  isComplete?: Boolean
  duration?: Int
  status?: TASK_STATUS
  createdBy?: UserUpdateOneWithoutTasksInput
  priority?: PriorityUpdateOneInput
  subTasks?: TaskUpdateManyInput
  tags?: TagUpdateManyInput
  attachments?: FileUpdateManyInput
}

export interface CityWhereInput {
  AND?: CityWhereInput[] | CityWhereInput
  OR?: CityWhereInput[] | CityWhereInput
  NOT?: CityWhereInput[] | CityWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  name?: String
  name_not?: String
  name_in?: String[] | String
  name_not_in?: String[] | String
  name_lt?: String
  name_lte?: String
  name_gt?: String
  name_gte?: String
  name_contains?: String
  name_not_contains?: String
  name_starts_with?: String
  name_not_starts_with?: String
  name_ends_with?: String
  name_not_ends_with?: String
}

export interface TaskUpdateWithWhereUniqueWithoutCategoriesInput {
  where: TaskWhereUniqueInput
  data: TaskUpdateWithoutCategoriesDataInput
}

export interface PaymentAccountSubscriptionWhereInput {
  AND?: PaymentAccountSubscriptionWhereInput[] | PaymentAccountSubscriptionWhereInput
  OR?: PaymentAccountSubscriptionWhereInput[] | PaymentAccountSubscriptionWhereInput
  NOT?: PaymentAccountSubscriptionWhereInput[] | PaymentAccountSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: PaymentAccountWhereInput
}

export interface TaskUpdateManyWithoutCategoriesInput {
  create?: TaskCreateWithoutCategoriesInput[] | TaskCreateWithoutCategoriesInput
  connect?: TaskWhereUniqueInput[] | TaskWhereUniqueInput
  disconnect?: TaskWhereUniqueInput[] | TaskWhereUniqueInput
  delete?: TaskWhereUniqueInput[] | TaskWhereUniqueInput
  update?: TaskUpdateWithWhereUniqueWithoutCategoriesInput[] | TaskUpdateWithWhereUniqueWithoutCategoriesInput
  upsert?: TaskUpsertWithWhereUniqueWithoutCategoriesInput[] | TaskUpsertWithWhereUniqueWithoutCategoriesInput
}

export interface NotificationSubscriptionWhereInput {
  AND?: NotificationSubscriptionWhereInput[] | NotificationSubscriptionWhereInput
  OR?: NotificationSubscriptionWhereInput[] | NotificationSubscriptionWhereInput
  NOT?: NotificationSubscriptionWhereInput[] | NotificationSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: NotificationWhereInput
}

export interface UserUpsertNestedInput {
  update: UserUpdateDataInput
  create: UserCreateInput
}

export interface FileWhereInput {
  AND?: FileWhereInput[] | FileWhereInput
  OR?: FileWhereInput[] | FileWhereInput
  NOT?: FileWhereInput[] | FileWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  name?: String
  name_not?: String
  name_in?: String[] | String
  name_not_in?: String[] | String
  name_lt?: String
  name_lte?: String
  name_gt?: String
  name_gte?: String
  name_contains?: String
  name_not_contains?: String
  name_starts_with?: String
  name_not_starts_with?: String
  name_ends_with?: String
  name_not_ends_with?: String
  size?: Int
  size_not?: Int
  size_in?: Int[] | Int
  size_not_in?: Int[] | Int
  size_lt?: Int
  size_lte?: Int
  size_gt?: Int
  size_gte?: Int
  secret?: String
  secret_not?: String
  secret_in?: String[] | String
  secret_not_in?: String[] | String
  secret_lt?: String
  secret_lte?: String
  secret_gt?: String
  secret_gte?: String
  secret_contains?: String
  secret_not_contains?: String
  secret_starts_with?: String
  secret_not_starts_with?: String
  secret_ends_with?: String
  secret_not_ends_with?: String
  contentType?: String
  contentType_not?: String
  contentType_in?: String[] | String
  contentType_not_in?: String[] | String
  contentType_lt?: String
  contentType_lte?: String
  contentType_gt?: String
  contentType_gte?: String
  contentType_contains?: String
  contentType_not_contains?: String
  contentType_starts_with?: String
  contentType_not_starts_with?: String
  contentType_ends_with?: String
  contentType_not_ends_with?: String
  createdAt?: DateTime
  createdAt_not?: DateTime
  createdAt_in?: DateTime[] | DateTime
  createdAt_not_in?: DateTime[] | DateTime
  createdAt_lt?: DateTime
  createdAt_lte?: DateTime
  createdAt_gt?: DateTime
  createdAt_gte?: DateTime
  updatedAt?: DateTime
  updatedAt_not?: DateTime
  updatedAt_in?: DateTime[] | DateTime
  updatedAt_not_in?: DateTime[] | DateTime
  updatedAt_lt?: DateTime
  updatedAt_lte?: DateTime
  updatedAt_gt?: DateTime
  updatedAt_gte?: DateTime
  url?: String
  url_not?: String
  url_in?: String[] | String
  url_not_in?: String[] | String
  url_lt?: String
  url_lte?: String
  url_gt?: String
  url_gte?: String
  url_contains?: String
  url_not_contains?: String
  url_starts_with?: String
  url_not_starts_with?: String
  url_ends_with?: String
  url_not_ends_with?: String
}

export interface TaskUpsertWithWhereUniqueWithoutCreatedByInput {
  where: TaskWhereUniqueInput
  update: TaskUpdateWithoutCreatedByDataInput
  create: TaskCreateWithoutCreatedByInput
}

export interface PaymentWhereInput {
  AND?: PaymentWhereInput[] | PaymentWhereInput
  OR?: PaymentWhereInput[] | PaymentWhereInput
  NOT?: PaymentWhereInput[] | PaymentWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  createdAt?: DateTime
  createdAt_not?: DateTime
  createdAt_in?: DateTime[] | DateTime
  createdAt_not_in?: DateTime[] | DateTime
  createdAt_lt?: DateTime
  createdAt_lte?: DateTime
  createdAt_gt?: DateTime
  createdAt_gte?: DateTime
  serviceFee?: Float
  serviceFee_not?: Float
  serviceFee_in?: Float[] | Float
  serviceFee_not_in?: Float[] | Float
  serviceFee_lt?: Float
  serviceFee_lte?: Float
  serviceFee_gt?: Float
  serviceFee_gte?: Float
  placePrice?: Float
  placePrice_not?: Float
  placePrice_in?: Float[] | Float
  placePrice_not_in?: Float[] | Float
  placePrice_lt?: Float
  placePrice_lte?: Float
  placePrice_gt?: Float
  placePrice_gte?: Float
  totalPrice?: Float
  totalPrice_not?: Float
  totalPrice_in?: Float[] | Float
  totalPrice_not_in?: Float[] | Float
  totalPrice_lt?: Float
  totalPrice_lte?: Float
  totalPrice_gt?: Float
  totalPrice_gte?: Float
  paymentMethod?: PaymentAccountWhereInput
}

export interface TaskUpsertWithWhereUniqueNestedInput {
  where: TaskWhereUniqueInput
  update: TaskUpdateDataInput
  create: TaskCreateInput
}

export interface TagWhereInput {
  AND?: TagWhereInput[] | TagWhereInput
  OR?: TagWhereInput[] | TagWhereInput
  NOT?: TagWhereInput[] | TagWhereInput
  name?: String
  name_not?: String
  name_in?: String[] | String
  name_not_in?: String[] | String
  name_lt?: String
  name_lte?: String
  name_gt?: String
  name_gte?: String
  name_contains?: String
  name_not_contains?: String
  name_starts_with?: String
  name_not_starts_with?: String
  name_ends_with?: String
  name_not_ends_with?: String
  description?: String
  description_not?: String
  description_in?: String[] | String
  description_not_in?: String[] | String
  description_lt?: String
  description_lte?: String
  description_gt?: String
  description_gte?: String
  description_contains?: String
  description_not_contains?: String
  description_starts_with?: String
  description_not_starts_with?: String
  description_ends_with?: String
  description_not_ends_with?: String
  color?: String
  color_not?: String
  color_in?: String[] | String
  color_not_in?: String[] | String
  color_lt?: String
  color_lte?: String
  color_gt?: String
  color_gte?: String
  color_contains?: String
  color_not_contains?: String
  color_starts_with?: String
  color_not_starts_with?: String
  color_ends_with?: String
  color_not_ends_with?: String
}

export interface FileUpsertWithWhereUniqueNestedInput {
  where: FileWhereUniqueInput
  update: FileUpdateDataInput
  create: FileCreateInput
}

export interface CreditCardInformationWhereInput {
  AND?: CreditCardInformationWhereInput[] | CreditCardInformationWhereInput
  OR?: CreditCardInformationWhereInput[] | CreditCardInformationWhereInput
  NOT?: CreditCardInformationWhereInput[] | CreditCardInformationWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  createdAt?: DateTime
  createdAt_not?: DateTime
  createdAt_in?: DateTime[] | DateTime
  createdAt_not_in?: DateTime[] | DateTime
  createdAt_lt?: DateTime
  createdAt_lte?: DateTime
  createdAt_gt?: DateTime
  createdAt_gte?: DateTime
  cardNumber?: String
  cardNumber_not?: String
  cardNumber_in?: String[] | String
  cardNumber_not_in?: String[] | String
  cardNumber_lt?: String
  cardNumber_lte?: String
  cardNumber_gt?: String
  cardNumber_gte?: String
  cardNumber_contains?: String
  cardNumber_not_contains?: String
  cardNumber_starts_with?: String
  cardNumber_not_starts_with?: String
  cardNumber_ends_with?: String
  cardNumber_not_ends_with?: String
  expiresOnMonth?: Int
  expiresOnMonth_not?: Int
  expiresOnMonth_in?: Int[] | Int
  expiresOnMonth_not_in?: Int[] | Int
  expiresOnMonth_lt?: Int
  expiresOnMonth_lte?: Int
  expiresOnMonth_gt?: Int
  expiresOnMonth_gte?: Int
  expiresOnYear?: Int
  expiresOnYear_not?: Int
  expiresOnYear_in?: Int[] | Int
  expiresOnYear_not_in?: Int[] | Int
  expiresOnYear_lt?: Int
  expiresOnYear_lte?: Int
  expiresOnYear_gt?: Int
  expiresOnYear_gte?: Int
  securityCode?: String
  securityCode_not?: String
  securityCode_in?: String[] | String
  securityCode_not_in?: String[] | String
  securityCode_lt?: String
  securityCode_lte?: String
  securityCode_gt?: String
  securityCode_gte?: String
  securityCode_contains?: String
  securityCode_not_contains?: String
  securityCode_starts_with?: String
  securityCode_not_starts_with?: String
  securityCode_ends_with?: String
  securityCode_not_ends_with?: String
  firstName?: String
  firstName_not?: String
  firstName_in?: String[] | String
  firstName_not_in?: String[] | String
  firstName_lt?: String
  firstName_lte?: String
  firstName_gt?: String
  firstName_gte?: String
  firstName_contains?: String
  firstName_not_contains?: String
  firstName_starts_with?: String
  firstName_not_starts_with?: String
  firstName_ends_with?: String
  firstName_not_ends_with?: String
  lastName?: String
  lastName_not?: String
  lastName_in?: String[] | String
  lastName_not_in?: String[] | String
  lastName_lt?: String
  lastName_lte?: String
  lastName_gt?: String
  lastName_gte?: String
  lastName_contains?: String
  lastName_not_contains?: String
  lastName_starts_with?: String
  lastName_not_starts_with?: String
  lastName_ends_with?: String
  lastName_not_ends_with?: String
  postalCode?: String
  postalCode_not?: String
  postalCode_in?: String[] | String
  postalCode_not_in?: String[] | String
  postalCode_lt?: String
  postalCode_lte?: String
  postalCode_gt?: String
  postalCode_gte?: String
  postalCode_contains?: String
  postalCode_not_contains?: String
  postalCode_starts_with?: String
  postalCode_not_starts_with?: String
  postalCode_ends_with?: String
  postalCode_not_ends_with?: String
  country?: String
  country_not?: String
  country_in?: String[] | String
  country_not_in?: String[] | String
  country_lt?: String
  country_lte?: String
  country_gt?: String
  country_gte?: String
  country_contains?: String
  country_not_contains?: String
  country_starts_with?: String
  country_not_starts_with?: String
  country_ends_with?: String
  country_not_ends_with?: String
  paymentAccount?: PaymentAccountWhereInput
}

export interface FileUpdateDataInput {
  name?: String
  size?: Int
  secret?: String
  contentType?: String
  url?: String
}

export interface EventSubscriptionWhereInput {
  AND?: EventSubscriptionWhereInput[] | EventSubscriptionWhereInput
  OR?: EventSubscriptionWhereInput[] | EventSubscriptionWhereInput
  NOT?: EventSubscriptionWhereInput[] | EventSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: EventWhereInput
}

export interface PictureCreateInput {
  url: String
}

export interface StatusUpdateSubscriptionWhereInput {
  AND?: StatusUpdateSubscriptionWhereInput[] | StatusUpdateSubscriptionWhereInput
  OR?: StatusUpdateSubscriptionWhereInput[] | StatusUpdateSubscriptionWhereInput
  NOT?: StatusUpdateSubscriptionWhereInput[] | StatusUpdateSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: StatusUpdateWhereInput
}

export interface CategoryCreateInput {
  name?: String
  description?: String
  createdBy: UserCreateOneInput
  tasks?: TaskCreateManyWithoutCategoriesInput
}

export interface TaskWhereInput {
  AND?: TaskWhereInput[] | TaskWhereInput
  OR?: TaskWhereInput[] | TaskWhereInput
  NOT?: TaskWhereInput[] | TaskWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  createdAt?: DateTime
  createdAt_not?: DateTime
  createdAt_in?: DateTime[] | DateTime
  createdAt_not_in?: DateTime[] | DateTime
  createdAt_lt?: DateTime
  createdAt_lte?: DateTime
  createdAt_gt?: DateTime
  createdAt_gte?: DateTime
  updatedAt?: DateTime
  updatedAt_not?: DateTime
  updatedAt_in?: DateTime[] | DateTime
  updatedAt_not_in?: DateTime[] | DateTime
  updatedAt_lt?: DateTime
  updatedAt_lte?: DateTime
  updatedAt_gt?: DateTime
  updatedAt_gte?: DateTime
  title?: String
  title_not?: String
  title_in?: String[] | String
  title_not_in?: String[] | String
  title_lt?: String
  title_lte?: String
  title_gt?: String
  title_gte?: String
  title_contains?: String
  title_not_contains?: String
  title_starts_with?: String
  title_not_starts_with?: String
  title_ends_with?: String
  title_not_ends_with?: String
  description?: String
  description_not?: String
  description_in?: String[] | String
  description_not_in?: String[] | String
  description_lt?: String
  description_lte?: String
  description_gt?: String
  description_gte?: String
  description_contains?: String
  description_not_contains?: String
  description_starts_with?: String
  description_not_starts_with?: String
  description_ends_with?: String
  description_not_ends_with?: String
  startDate?: DateTime
  startDate_not?: DateTime
  startDate_in?: DateTime[] | DateTime
  startDate_not_in?: DateTime[] | DateTime
  startDate_lt?: DateTime
  startDate_lte?: DateTime
  startDate_gt?: DateTime
  startDate_gte?: DateTime
  finishDate?: DateTime
  finishDate_not?: DateTime
  finishDate_in?: DateTime[] | DateTime
  finishDate_not_in?: DateTime[] | DateTime
  finishDate_lt?: DateTime
  finishDate_lte?: DateTime
  finishDate_gt?: DateTime
  finishDate_gte?: DateTime
  isComplete?: Boolean
  isComplete_not?: Boolean
  duration?: Int
  duration_not?: Int
  duration_in?: Int[] | Int
  duration_not_in?: Int[] | Int
  duration_lt?: Int
  duration_lte?: Int
  duration_gt?: Int
  duration_gte?: Int
  status?: TASK_STATUS
  status_not?: TASK_STATUS
  status_in?: TASK_STATUS[] | TASK_STATUS
  status_not_in?: TASK_STATUS[] | TASK_STATUS
  createdBy?: UserWhereInput
  categories_every?: CategoryWhereInput
  categories_some?: CategoryWhereInput
  categories_none?: CategoryWhereInput
  priority?: PriorityWhereInput
  subTasks_every?: TaskWhereInput
  subTasks_some?: TaskWhereInput
  subTasks_none?: TaskWhereInput
  tags_every?: TagWhereInput
  tags_some?: TagWhereInput
  tags_none?: TagWhereInput
  attachments_every?: FileWhereInput
  attachments_some?: FileWhereInput
  attachments_none?: FileWhereInput
}

export interface UserCreateOneInput {
  create?: UserCreateInput
  connect?: UserWhereUniqueInput
}

export interface UserWhereInput {
  AND?: UserWhereInput[] | UserWhereInput
  OR?: UserWhereInput[] | UserWhereInput
  NOT?: UserWhereInput[] | UserWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  createdAt?: DateTime
  createdAt_not?: DateTime
  createdAt_in?: DateTime[] | DateTime
  createdAt_not_in?: DateTime[] | DateTime
  createdAt_lt?: DateTime
  createdAt_lte?: DateTime
  createdAt_gt?: DateTime
  createdAt_gte?: DateTime
  updatedAt?: DateTime
  updatedAt_not?: DateTime
  updatedAt_in?: DateTime[] | DateTime
  updatedAt_not_in?: DateTime[] | DateTime
  updatedAt_lt?: DateTime
  updatedAt_lte?: DateTime
  updatedAt_gt?: DateTime
  updatedAt_gte?: DateTime
  email?: String
  email_not?: String
  email_in?: String[] | String
  email_not_in?: String[] | String
  email_lt?: String
  email_lte?: String
  email_gt?: String
  email_gte?: String
  email_contains?: String
  email_not_contains?: String
  email_starts_with?: String
  email_not_starts_with?: String
  email_ends_with?: String
  email_not_ends_with?: String
  password?: String
  password_not?: String
  password_in?: String[] | String
  password_not_in?: String[] | String
  password_lt?: String
  password_lte?: String
  password_gt?: String
  password_gte?: String
  password_contains?: String
  password_not_contains?: String
  password_starts_with?: String
  password_not_starts_with?: String
  password_ends_with?: String
  password_not_ends_with?: String
  isAdmin?: Boolean
  isAdmin_not?: Boolean
  role?: Role
  role_not?: Role
  role_in?: Role[] | Role
  role_not_in?: Role[] | Role
  firstName?: String
  firstName_not?: String
  firstName_in?: String[] | String
  firstName_not_in?: String[] | String
  firstName_lt?: String
  firstName_lte?: String
  firstName_gt?: String
  firstName_gte?: String
  firstName_contains?: String
  firstName_not_contains?: String
  firstName_starts_with?: String
  firstName_not_starts_with?: String
  firstName_ends_with?: String
  firstName_not_ends_with?: String
  lastName?: String
  lastName_not?: String
  lastName_in?: String[] | String
  lastName_not_in?: String[] | String
  lastName_lt?: String
  lastName_lte?: String
  lastName_gt?: String
  lastName_gte?: String
  lastName_contains?: String
  lastName_not_contains?: String
  lastName_starts_with?: String
  lastName_not_starts_with?: String
  lastName_ends_with?: String
  lastName_not_ends_with?: String
  phone?: String
  phone_not?: String
  phone_in?: String[] | String
  phone_not_in?: String[] | String
  phone_lt?: String
  phone_lte?: String
  phone_gt?: String
  phone_gte?: String
  phone_contains?: String
  phone_not_contains?: String
  phone_starts_with?: String
  phone_not_starts_with?: String
  phone_ends_with?: String
  phone_not_ends_with?: String
  avatarColor?: String
  avatarColor_not?: String
  avatarColor_in?: String[] | String
  avatarColor_not_in?: String[] | String
  avatarColor_lt?: String
  avatarColor_lte?: String
  avatarColor_gt?: String
  avatarColor_gte?: String
  avatarColor_contains?: String
  avatarColor_not_contains?: String
  avatarColor_starts_with?: String
  avatarColor_not_starts_with?: String
  avatarColor_ends_with?: String
  avatarColor_not_ends_with?: String
  tasks_every?: TaskWhereInput
  tasks_some?: TaskWhereInput
  tasks_none?: TaskWhereInput
  posts_every?: PostWhereInput
  posts_some?: PostWhereInput
  posts_none?: PostWhereInput
  notifications_every?: NotificationWhereInput
  notifications_some?: NotificationWhereInput
  notifications_none?: NotificationWhereInput
}

export interface UserCreateInput {
  email: String
  password: String
  isAdmin?: Boolean
  role?: Role
  firstName?: String
  lastName?: String
  phone?: String
  avatarColor?: String
  tasks?: TaskCreateManyWithoutCreatedByInput
  posts?: PostCreateManyWithoutAuthorInput
  notifications?: NotificationCreateManyWithoutUserInput
}

export interface TagUpdateInput {
  name?: String
  description?: String
  color?: String
}

export interface TaskCreateManyWithoutCreatedByInput {
  create?: TaskCreateWithoutCreatedByInput[] | TaskCreateWithoutCreatedByInput
  connect?: TaskWhereUniqueInput[] | TaskWhereUniqueInput
}

export interface PictureUpdateInput {
  url?: String
}

export interface TaskCreateWithoutCreatedByInput {
  title?: String
  description?: String
  startDate?: DateTime
  finishDate?: DateTime
  isComplete?: Boolean
  duration?: Int
  status?: TASK_STATUS
  categories?: CategoryCreateManyWithoutTasksInput
  priority?: PriorityCreateOneInput
  subTasks?: TaskCreateManyInput
  tags?: TagCreateManyInput
  attachments?: FileCreateManyInput
}

export interface PostWhereUniqueInput {
  id?: ID_Input
}

export interface CategoryCreateManyWithoutTasksInput {
  create?: CategoryCreateWithoutTasksInput[] | CategoryCreateWithoutTasksInput
  connect?: CategoryWhereUniqueInput[] | CategoryWhereUniqueInput
}

export interface ReminderWhereUniqueInput {
  id?: ID_Input
}

export interface CategoryCreateWithoutTasksInput {
  name?: String
  description?: String
  createdBy: UserCreateOneInput
}

export interface MessageWhereUniqueInput {
  id?: ID_Input
}

export interface PriorityCreateOneInput {
  create?: PriorityCreateInput
  connect?: PriorityWhereUniqueInput
}

export interface PaymentWhereUniqueInput {
  id?: ID_Input
}

export interface PriorityCreateInput {
  name?: String
  description?: String
  createdBy: UserCreateOneInput
}

export interface PaypalInformationWhereUniqueInput {
  id?: ID_Input
}

export interface TaskCreateManyInput {
  create?: TaskCreateInput[] | TaskCreateInput
  connect?: TaskWhereUniqueInput[] | TaskWhereUniqueInput
}

export interface PriorityWhereUniqueInput {
  id?: ID_Input
}

export interface TaskCreateInput {
  title?: String
  description?: String
  startDate?: DateTime
  finishDate?: DateTime
  isComplete?: Boolean
  duration?: Int
  status?: TASK_STATUS
  createdBy: UserCreateOneWithoutTasksInput
  categories?: CategoryCreateManyWithoutTasksInput
  priority?: PriorityCreateOneInput
  subTasks?: TaskCreateManyInput
  tags?: TagCreateManyInput
  attachments?: FileCreateManyInput
}

export interface TaskWhereUniqueInput {
  id?: ID_Input
}

export interface UserCreateOneWithoutTasksInput {
  create?: UserCreateWithoutTasksInput
  connect?: UserWhereUniqueInput
}

export interface LocationWhereUniqueInput {
  id?: ID_Input
}

export interface UserCreateWithoutTasksInput {
  email: String
  password: String
  isAdmin?: Boolean
  role?: Role
  firstName?: String
  lastName?: String
  phone?: String
  avatarColor?: String
  posts?: PostCreateManyWithoutAuthorInput
  notifications?: NotificationCreateManyWithoutUserInput
}

export interface FileUpdateInput {
  name?: String
  size?: Int
  secret?: String
  contentType?: String
  url?: String
}

export interface PostCreateManyWithoutAuthorInput {
  create?: PostCreateWithoutAuthorInput[] | PostCreateWithoutAuthorInput
  connect?: PostWhereUniqueInput[] | PostWhereUniqueInput
}

export interface UserUpdateInput {
  email?: String
  password?: String
  isAdmin?: Boolean
  role?: Role
  firstName?: String
  lastName?: String
  phone?: String
  avatarColor?: String
  tasks?: TaskUpdateManyWithoutCreatedByInput
  posts?: PostUpdateManyWithoutAuthorInput
  notifications?: NotificationUpdateManyWithoutUserInput
}

export interface PostCreateWithoutAuthorInput {
  isPublished?: Boolean
  title: String
  text: String
}

export interface CityUpdateInput {
  name?: String
}

export interface NotificationCreateManyWithoutUserInput {
  create?: NotificationCreateWithoutUserInput[] | NotificationCreateWithoutUserInput
  connect?: NotificationWhereUniqueInput[] | NotificationWhereUniqueInput
}

export interface PaymentAccountUpsertWithoutCreditcardInput {
  update: PaymentAccountUpdateWithoutCreditcardDataInput
  create: PaymentAccountCreateWithoutCreditcardInput
}

export interface NotificationCreateWithoutUserInput {
  type?: NOTIFICATION_TYPE
  link: String
  readDate: DateTime
}

export interface PaymentAccountUpdateOneWithoutCreditcardInput {
  create?: PaymentAccountCreateWithoutCreditcardInput
  connect?: PaymentAccountWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: PaymentAccountUpdateWithoutCreditcardDataInput
  upsert?: PaymentAccountUpsertWithoutCreditcardInput
}

export interface TagCreateManyInput {
  create?: TagCreateInput[] | TagCreateInput
}

export interface PaymentAccountUpsertWithoutPaypalInput {
  update: PaymentAccountUpdateWithoutPaypalDataInput
  create: PaymentAccountCreateWithoutPaypalInput
}

export interface TagCreateInput {
  name: String
  description?: String
  color: String
}

export interface PaymentAccountUpdateOneWithoutPaypalInput {
  create?: PaymentAccountCreateWithoutPaypalInput
  connect?: PaymentAccountWhereUniqueInput
  delete?: Boolean
  update?: PaymentAccountUpdateWithoutPaypalDataInput
  upsert?: PaymentAccountUpsertWithoutPaypalInput
}

export interface FileCreateManyInput {
  create?: FileCreateInput[] | FileCreateInput
  connect?: FileWhereUniqueInput[] | FileWhereUniqueInput
}

export interface PaymentUpsertWithWhereUniqueWithoutPaymentMethodInput {
  where: PaymentWhereUniqueInput
  update: PaymentUpdateWithoutPaymentMethodDataInput
  create: PaymentCreateWithoutPaymentMethodInput
}

export interface FileCreateInput {
  name: String
  size: Int
  secret: String
  contentType: String
  url: String
}

export interface PaymentUpdateWithWhereUniqueWithoutPaymentMethodInput {
  where: PaymentWhereUniqueInput
  data: PaymentUpdateWithoutPaymentMethodDataInput
}

export interface TaskCreateManyWithoutCategoriesInput {
  create?: TaskCreateWithoutCategoriesInput[] | TaskCreateWithoutCategoriesInput
  connect?: TaskWhereUniqueInput[] | TaskWhereUniqueInput
}

export interface PaymentAccountUpdateInput {
  type?: PAYMENT_PROVIDER
  user?: UserUpdateOneInput
  payments?: PaymentUpdateManyWithoutPaymentMethodInput
  paypal?: PaypalInformationUpdateOneWithoutPaymentAccountInput
  creditcard?: CreditCardInformationUpdateOneWithoutPaymentAccountInput
}

export interface TaskCreateWithoutCategoriesInput {
  title?: String
  description?: String
  startDate?: DateTime
  finishDate?: DateTime
  isComplete?: Boolean
  duration?: Int
  status?: TASK_STATUS
  createdBy: UserCreateOneWithoutTasksInput
  priority?: PriorityCreateOneInput
  subTasks?: TaskCreateManyInput
  tags?: TagCreateManyInput
  attachments?: FileCreateManyInput
}

export interface CreditCardInformationUpsertWithoutPaymentAccountInput {
  update: CreditCardInformationUpdateWithoutPaymentAccountDataInput
  create: CreditCardInformationCreateWithoutPaymentAccountInput
}

export interface PostCreateInput {
  isPublished?: Boolean
  title: String
  text: String
  author: UserCreateOneWithoutPostsInput
}

export interface CreditCardInformationUpdateOneWithoutPaymentAccountInput {
  create?: CreditCardInformationCreateWithoutPaymentAccountInput
  connect?: CreditCardInformationWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: CreditCardInformationUpdateWithoutPaymentAccountDataInput
  upsert?: CreditCardInformationUpsertWithoutPaymentAccountInput
}

export interface UserCreateOneWithoutPostsInput {
  create?: UserCreateWithoutPostsInput
  connect?: UserWhereUniqueInput
}

export interface PaypalInformationUpdateWithoutPaymentAccountDataInput {
  email?: String
}

export interface UserCreateWithoutPostsInput {
  email: String
  password: String
  isAdmin?: Boolean
  role?: Role
  firstName?: String
  lastName?: String
  phone?: String
  avatarColor?: String
  tasks?: TaskCreateManyWithoutCreatedByInput
  notifications?: NotificationCreateManyWithoutUserInput
}

export interface PaymentAccountUpdateWithoutPaymentsDataInput {
  type?: PAYMENT_PROVIDER
  user?: UserUpdateOneInput
  paypal?: PaypalInformationUpdateOneWithoutPaymentAccountInput
  creditcard?: CreditCardInformationUpdateOneWithoutPaymentAccountInput
}

export interface StatusUpdateCreateInput {
  text: String
  previousStatus: String
  newStatus: String
  createdBy: UserCreateOneInput
  task: TaskCreateOneInput
}

export interface PaymentUpdateInput {
  serviceFee?: Float
  placePrice?: Float
  totalPrice?: Float
  paymentMethod?: PaymentAccountUpdateOneWithoutPaymentsInput
}

export interface TaskCreateOneInput {
  create?: TaskCreateInput
  connect?: TaskWhereUniqueInput
}

export interface UserUpdateWithoutNotificationsDataInput {
  email?: String
  password?: String
  isAdmin?: Boolean
  role?: Role
  firstName?: String
  lastName?: String
  phone?: String
  avatarColor?: String
  tasks?: TaskUpdateManyWithoutCreatedByInput
  posts?: PostUpdateManyWithoutAuthorInput
}

export interface ReminderCreateInput {
  title: String
  description: String
  createdBy: UserCreateOneInput
}

export interface NotificationUpdateInput {
  type?: NOTIFICATION_TYPE
  link?: String
  readDate?: DateTime
  user?: UserUpdateOneWithoutNotificationsInput
}

export interface EventCreateInput {
  title: String
  description: String
  date: DateTime
  createdBy: UserCreateOneInput
  location?: LocationCreateOneInput
  tags?: TagCreateManyInput
}

export interface LocationUpsertNestedInput {
  update: LocationUpdateDataInput
  create: LocationCreateInput
}

export interface FileUpdateWithWhereUniqueNestedInput {
  where: FileWhereUniqueInput
  data: FileUpdateDataInput
}

export interface CityUpdateDataInput {
  name?: String
}

export interface LocationCreateInput {
  lat: Float
  lng: Float
  address?: String
  directions?: String
  city?: CityCreateOneInput
}

export interface LocationUpdateDataInput {
  lat?: Float
  lng?: Float
  address?: String
  directions?: String
  city?: CityUpdateOneInput
}

export interface CityCreateOneInput {
  create?: CityCreateInput
  connect?: CityWhereUniqueInput
}

export interface EventUpdateInput {
  title?: String
  description?: String
  date?: DateTime
  createdBy?: UserUpdateOneInput
  location?: LocationUpdateOneInput
  tags?: TagUpdateManyInput
}

export interface CityCreateInput {
  name: String
}

export interface UserSubscriptionWhereInput {
  AND?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput
  OR?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput
  NOT?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: UserWhereInput
}

export interface MessageCreateInput {
  deliveredAt: DateTime
  readAt: DateTime
  from: UserCreateOneInput
  to: UserCreateOneInput
}

export interface StatusUpdateWhereInput {
  AND?: StatusUpdateWhereInput[] | StatusUpdateWhereInput
  OR?: StatusUpdateWhereInput[] | StatusUpdateWhereInput
  NOT?: StatusUpdateWhereInput[] | StatusUpdateWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  createdAt?: DateTime
  createdAt_not?: DateTime
  createdAt_in?: DateTime[] | DateTime
  createdAt_not_in?: DateTime[] | DateTime
  createdAt_lt?: DateTime
  createdAt_lte?: DateTime
  createdAt_gt?: DateTime
  createdAt_gte?: DateTime
  updatedAt?: DateTime
  updatedAt_not?: DateTime
  updatedAt_in?: DateTime[] | DateTime
  updatedAt_not_in?: DateTime[] | DateTime
  updatedAt_lt?: DateTime
  updatedAt_lte?: DateTime
  updatedAt_gt?: DateTime
  updatedAt_gte?: DateTime
  text?: String
  text_not?: String
  text_in?: String[] | String
  text_not_in?: String[] | String
  text_lt?: String
  text_lte?: String
  text_gt?: String
  text_gte?: String
  text_contains?: String
  text_not_contains?: String
  text_starts_with?: String
  text_not_starts_with?: String
  text_ends_with?: String
  text_not_ends_with?: String
  previousStatus?: String
  previousStatus_not?: String
  previousStatus_in?: String[] | String
  previousStatus_not_in?: String[] | String
  previousStatus_lt?: String
  previousStatus_lte?: String
  previousStatus_gt?: String
  previousStatus_gte?: String
  previousStatus_contains?: String
  previousStatus_not_contains?: String
  previousStatus_starts_with?: String
  previousStatus_not_starts_with?: String
  previousStatus_ends_with?: String
  previousStatus_not_ends_with?: String
  newStatus?: String
  newStatus_not?: String
  newStatus_in?: String[] | String
  newStatus_not_in?: String[] | String
  newStatus_lt?: String
  newStatus_lte?: String
  newStatus_gt?: String
  newStatus_gte?: String
  newStatus_contains?: String
  newStatus_not_contains?: String
  newStatus_starts_with?: String
  newStatus_not_starts_with?: String
  newStatus_ends_with?: String
  newStatus_not_ends_with?: String
  createdBy?: UserWhereInput
  task?: TaskWhereInput
}

export interface NotificationCreateInput {
  type?: NOTIFICATION_TYPE
  link: String
  readDate: DateTime
  user: UserCreateOneWithoutNotificationsInput
}

export interface NotificationWhereInput {
  AND?: NotificationWhereInput[] | NotificationWhereInput
  OR?: NotificationWhereInput[] | NotificationWhereInput
  NOT?: NotificationWhereInput[] | NotificationWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  createdAt?: DateTime
  createdAt_not?: DateTime
  createdAt_in?: DateTime[] | DateTime
  createdAt_not_in?: DateTime[] | DateTime
  createdAt_lt?: DateTime
  createdAt_lte?: DateTime
  createdAt_gt?: DateTime
  createdAt_gte?: DateTime
  type?: NOTIFICATION_TYPE
  type_not?: NOTIFICATION_TYPE
  type_in?: NOTIFICATION_TYPE[] | NOTIFICATION_TYPE
  type_not_in?: NOTIFICATION_TYPE[] | NOTIFICATION_TYPE
  link?: String
  link_not?: String
  link_in?: String[] | String
  link_not_in?: String[] | String
  link_lt?: String
  link_lte?: String
  link_gt?: String
  link_gte?: String
  link_contains?: String
  link_not_contains?: String
  link_starts_with?: String
  link_not_starts_with?: String
  link_ends_with?: String
  link_not_ends_with?: String
  readDate?: DateTime
  readDate_not?: DateTime
  readDate_in?: DateTime[] | DateTime
  readDate_not_in?: DateTime[] | DateTime
  readDate_lt?: DateTime
  readDate_lte?: DateTime
  readDate_gt?: DateTime
  readDate_gte?: DateTime
  user?: UserWhereInput
}

export interface UserCreateOneWithoutNotificationsInput {
  create?: UserCreateWithoutNotificationsInput
  connect?: UserWhereUniqueInput
}

export interface PaypalInformationSubscriptionWhereInput {
  AND?: PaypalInformationSubscriptionWhereInput[] | PaypalInformationSubscriptionWhereInput
  OR?: PaypalInformationSubscriptionWhereInput[] | PaypalInformationSubscriptionWhereInput
  NOT?: PaypalInformationSubscriptionWhereInput[] | PaypalInformationSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: PaypalInformationWhereInput
}

export interface UserCreateWithoutNotificationsInput {
  email: String
  password: String
  isAdmin?: Boolean
  role?: Role
  firstName?: String
  lastName?: String
  phone?: String
  avatarColor?: String
  tasks?: TaskCreateManyWithoutCreatedByInput
  posts?: PostCreateManyWithoutAuthorInput
}

export interface PaymentSubscriptionWhereInput {
  AND?: PaymentSubscriptionWhereInput[] | PaymentSubscriptionWhereInput
  OR?: PaymentSubscriptionWhereInput[] | PaymentSubscriptionWhereInput
  NOT?: PaymentSubscriptionWhereInput[] | PaymentSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: PaymentWhereInput
}

export interface PaymentCreateInput {
  serviceFee: Float
  placePrice: Float
  totalPrice: Float
  paymentMethod: PaymentAccountCreateOneWithoutPaymentsInput
}

export interface MessageSubscriptionWhereInput {
  AND?: MessageSubscriptionWhereInput[] | MessageSubscriptionWhereInput
  OR?: MessageSubscriptionWhereInput[] | MessageSubscriptionWhereInput
  NOT?: MessageSubscriptionWhereInput[] | MessageSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: MessageWhereInput
}

export interface PaymentAccountCreateOneWithoutPaymentsInput {
  create?: PaymentAccountCreateWithoutPaymentsInput
  connect?: PaymentAccountWhereUniqueInput
}

export interface PaypalInformationWhereInput {
  AND?: PaypalInformationWhereInput[] | PaypalInformationWhereInput
  OR?: PaypalInformationWhereInput[] | PaypalInformationWhereInput
  NOT?: PaypalInformationWhereInput[] | PaypalInformationWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  createdAt?: DateTime
  createdAt_not?: DateTime
  createdAt_in?: DateTime[] | DateTime
  createdAt_not_in?: DateTime[] | DateTime
  createdAt_lt?: DateTime
  createdAt_lte?: DateTime
  createdAt_gt?: DateTime
  createdAt_gte?: DateTime
  email?: String
  email_not?: String
  email_in?: String[] | String
  email_not_in?: String[] | String
  email_lt?: String
  email_lte?: String
  email_gt?: String
  email_gte?: String
  email_contains?: String
  email_not_contains?: String
  email_starts_with?: String
  email_not_starts_with?: String
  email_ends_with?: String
  email_not_ends_with?: String
  paymentAccount?: PaymentAccountWhereInput
}

export interface PaymentAccountCreateWithoutPaymentsInput {
  type?: PAYMENT_PROVIDER
  user: UserCreateOneInput
  paypal?: PaypalInformationCreateOneWithoutPaymentAccountInput
  creditcard?: CreditCardInformationCreateOneWithoutPaymentAccountInput
}

export interface ReminderSubscriptionWhereInput {
  AND?: ReminderSubscriptionWhereInput[] | ReminderSubscriptionWhereInput
  OR?: ReminderSubscriptionWhereInput[] | ReminderSubscriptionWhereInput
  NOT?: ReminderSubscriptionWhereInput[] | ReminderSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: ReminderWhereInput
}

export interface PaypalInformationCreateOneWithoutPaymentAccountInput {
  create?: PaypalInformationCreateWithoutPaymentAccountInput
  connect?: PaypalInformationWhereUniqueInput
}

export interface CategorySubscriptionWhereInput {
  AND?: CategorySubscriptionWhereInput[] | CategorySubscriptionWhereInput
  OR?: CategorySubscriptionWhereInput[] | CategorySubscriptionWhereInput
  NOT?: CategorySubscriptionWhereInput[] | CategorySubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: CategoryWhereInput
}

export interface PaypalInformationCreateWithoutPaymentAccountInput {
  email: String
}

export interface CategoryWhereInput {
  AND?: CategoryWhereInput[] | CategoryWhereInput
  OR?: CategoryWhereInput[] | CategoryWhereInput
  NOT?: CategoryWhereInput[] | CategoryWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  createdAt?: DateTime
  createdAt_not?: DateTime
  createdAt_in?: DateTime[] | DateTime
  createdAt_not_in?: DateTime[] | DateTime
  createdAt_lt?: DateTime
  createdAt_lte?: DateTime
  createdAt_gt?: DateTime
  createdAt_gte?: DateTime
  updatedAt?: DateTime
  updatedAt_not?: DateTime
  updatedAt_in?: DateTime[] | DateTime
  updatedAt_not_in?: DateTime[] | DateTime
  updatedAt_lt?: DateTime
  updatedAt_lte?: DateTime
  updatedAt_gt?: DateTime
  updatedAt_gte?: DateTime
  name?: String
  name_not?: String
  name_in?: String[] | String
  name_not_in?: String[] | String
  name_lt?: String
  name_lte?: String
  name_gt?: String
  name_gte?: String
  name_contains?: String
  name_not_contains?: String
  name_starts_with?: String
  name_not_starts_with?: String
  name_ends_with?: String
  name_not_ends_with?: String
  description?: String
  description_not?: String
  description_in?: String[] | String
  description_not_in?: String[] | String
  description_lt?: String
  description_lte?: String
  description_gt?: String
  description_gte?: String
  description_contains?: String
  description_not_contains?: String
  description_starts_with?: String
  description_not_starts_with?: String
  description_ends_with?: String
  description_not_ends_with?: String
  createdBy?: UserWhereInput
  tasks_every?: TaskWhereInput
  tasks_some?: TaskWhereInput
  tasks_none?: TaskWhereInput
}

export interface FileUpdateManyInput {
  create?: FileCreateInput[] | FileCreateInput
  connect?: FileWhereUniqueInput[] | FileWhereUniqueInput
  disconnect?: FileWhereUniqueInput[] | FileWhereUniqueInput
  delete?: FileWhereUniqueInput[] | FileWhereUniqueInput
  update?: FileUpdateWithWhereUniqueNestedInput[] | FileUpdateWithWhereUniqueNestedInput
  upsert?: FileUpsertWithWhereUniqueNestedInput[] | FileUpsertWithWhereUniqueNestedInput
}

export interface StatusUpdateWhereUniqueInput {
  id?: ID_Input
}

export interface CreditCardInformationCreateWithoutPaymentAccountInput {
  cardNumber: String
  expiresOnMonth: Int
  expiresOnYear: Int
  securityCode: String
  firstName: String
  lastName: String
  postalCode: String
  country: String
}

export interface NotificationWhereUniqueInput {
  id?: ID_Input
}

export interface PaymentAccountCreateInput {
  type?: PAYMENT_PROVIDER
  user: UserCreateOneInput
  payments?: PaymentCreateManyWithoutPaymentMethodInput
  paypal?: PaypalInformationCreateOneWithoutPaymentAccountInput
  creditcard?: CreditCardInformationCreateOneWithoutPaymentAccountInput
}

export interface CreditCardInformationWhereUniqueInput {
  id?: ID_Input
}

export interface PaymentCreateManyWithoutPaymentMethodInput {
  create?: PaymentCreateWithoutPaymentMethodInput[] | PaymentCreateWithoutPaymentMethodInput
  connect?: PaymentWhereUniqueInput[] | PaymentWhereUniqueInput
}

export interface UserWhereUniqueInput {
  id?: ID_Input
  email?: String
}

export interface PaymentCreateWithoutPaymentMethodInput {
  serviceFee: Float
  placePrice: Float
  totalPrice: Float
}

export interface LocationUpdateInput {
  lat?: Float
  lng?: Float
  address?: String
  directions?: String
  city?: CityUpdateOneInput
}

export interface PaypalInformationCreateInput {
  email: String
  paymentAccount: PaymentAccountCreateOneWithoutPaypalInput
}

export interface PriorityUpdateInput {
  name?: String
  description?: String
  createdBy?: UserUpdateOneInput
}

export interface PaymentAccountCreateOneWithoutPaypalInput {
  create?: PaymentAccountCreateWithoutPaypalInput
  connect?: PaymentAccountWhereUniqueInput
}

export interface CreditCardInformationUpdateInput {
  cardNumber?: String
  expiresOnMonth?: Int
  expiresOnYear?: Int
  securityCode?: String
  firstName?: String
  lastName?: String
  postalCode?: String
  country?: String
  paymentAccount?: PaymentAccountUpdateOneWithoutCreditcardInput
}

export interface PaymentAccountCreateWithoutPaypalInput {
  type?: PAYMENT_PROVIDER
  user: UserCreateOneInput
  payments?: PaymentCreateManyWithoutPaymentMethodInput
  creditcard?: CreditCardInformationCreateOneWithoutPaymentAccountInput
}

export interface PaypalInformationUpdateInput {
  email?: String
  paymentAccount?: PaymentAccountUpdateOneWithoutPaypalInput
}

export interface CreditCardInformationCreateInput {
  cardNumber: String
  expiresOnMonth: Int
  expiresOnYear: Int
  securityCode: String
  firstName: String
  lastName: String
  postalCode: String
  country: String
  paymentAccount?: PaymentAccountCreateOneWithoutCreditcardInput
}

export interface PaymentUpdateManyWithoutPaymentMethodInput {
  create?: PaymentCreateWithoutPaymentMethodInput[] | PaymentCreateWithoutPaymentMethodInput
  connect?: PaymentWhereUniqueInput[] | PaymentWhereUniqueInput
  disconnect?: PaymentWhereUniqueInput[] | PaymentWhereUniqueInput
  delete?: PaymentWhereUniqueInput[] | PaymentWhereUniqueInput
  update?: PaymentUpdateWithWhereUniqueWithoutPaymentMethodInput[] | PaymentUpdateWithWhereUniqueWithoutPaymentMethodInput
  upsert?: PaymentUpsertWithWhereUniqueWithoutPaymentMethodInput[] | PaymentUpsertWithWhereUniqueWithoutPaymentMethodInput
}

export interface PaymentAccountCreateOneWithoutCreditcardInput {
  create?: PaymentAccountCreateWithoutCreditcardInput
  connect?: PaymentAccountWhereUniqueInput
}

export interface CreditCardInformationUpdateWithoutPaymentAccountDataInput {
  cardNumber?: String
  expiresOnMonth?: Int
  expiresOnYear?: Int
  securityCode?: String
  firstName?: String
  lastName?: String
  postalCode?: String
  country?: String
}

export interface PaymentAccountCreateWithoutCreditcardInput {
  type?: PAYMENT_PROVIDER
  user: UserCreateOneInput
  payments?: PaymentCreateManyWithoutPaymentMethodInput
  paypal?: PaypalInformationCreateOneWithoutPaymentAccountInput
}

export interface PaypalInformationUpdateOneWithoutPaymentAccountInput {
  create?: PaypalInformationCreateWithoutPaymentAccountInput
  connect?: PaypalInformationWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: PaypalInformationUpdateWithoutPaymentAccountDataInput
  upsert?: PaypalInformationUpsertWithoutPaymentAccountInput
}

export interface CategoryUpdateInput {
  name?: String
  description?: String
  createdBy?: UserUpdateOneInput
  tasks?: TaskUpdateManyWithoutCategoriesInput
}

export interface UserUpsertWithoutNotificationsInput {
  update: UserUpdateWithoutNotificationsDataInput
  create: UserCreateWithoutNotificationsInput
}

export interface UserUpdateOneInput {
  create?: UserCreateInput
  connect?: UserWhereUniqueInput
  delete?: Boolean
  update?: UserUpdateDataInput
  upsert?: UserUpsertNestedInput
}

export interface MessageUpdateInput {
  deliveredAt?: DateTime
  readAt?: DateTime
  from?: UserUpdateOneInput
  to?: UserUpdateOneInput
}

export interface UserUpdateDataInput {
  email?: String
  password?: String
  isAdmin?: Boolean
  role?: Role
  firstName?: String
  lastName?: String
  phone?: String
  avatarColor?: String
  tasks?: TaskUpdateManyWithoutCreatedByInput
  posts?: PostUpdateManyWithoutAuthorInput
  notifications?: NotificationUpdateManyWithoutUserInput
}

export interface CityUpdateOneInput {
  create?: CityCreateInput
  connect?: CityWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: CityUpdateDataInput
  upsert?: CityUpsertNestedInput
}

export interface TaskUpdateManyWithoutCreatedByInput {
  create?: TaskCreateWithoutCreatedByInput[] | TaskCreateWithoutCreatedByInput
  connect?: TaskWhereUniqueInput[] | TaskWhereUniqueInput
  disconnect?: TaskWhereUniqueInput[] | TaskWhereUniqueInput
  delete?: TaskWhereUniqueInput[] | TaskWhereUniqueInput
  update?: TaskUpdateWithWhereUniqueWithoutCreatedByInput[] | TaskUpdateWithWhereUniqueWithoutCreatedByInput
  upsert?: TaskUpsertWithWhereUniqueWithoutCreatedByInput[] | TaskUpsertWithWhereUniqueWithoutCreatedByInput
}

export interface FileSubscriptionWhereInput {
  AND?: FileSubscriptionWhereInput[] | FileSubscriptionWhereInput
  OR?: FileSubscriptionWhereInput[] | FileSubscriptionWhereInput
  NOT?: FileSubscriptionWhereInput[] | FileSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: FileWhereInput
}

export interface TaskUpdateWithWhereUniqueWithoutCreatedByInput {
  where: TaskWhereUniqueInput
  data: TaskUpdateWithoutCreatedByDataInput
}

export interface PrioritySubscriptionWhereInput {
  AND?: PrioritySubscriptionWhereInput[] | PrioritySubscriptionWhereInput
  OR?: PrioritySubscriptionWhereInput[] | PrioritySubscriptionWhereInput
  NOT?: PrioritySubscriptionWhereInput[] | PrioritySubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: PriorityWhereInput
}

export interface TaskUpdateWithoutCreatedByDataInput {
  title?: String
  description?: String
  startDate?: DateTime
  finishDate?: DateTime
  isComplete?: Boolean
  duration?: Int
  status?: TASK_STATUS
  categories?: CategoryUpdateManyWithoutTasksInput
  priority?: PriorityUpdateOneInput
  subTasks?: TaskUpdateManyInput
  tags?: TagUpdateManyInput
  attachments?: FileUpdateManyInput
}

export interface PostWhereInput {
  AND?: PostWhereInput[] | PostWhereInput
  OR?: PostWhereInput[] | PostWhereInput
  NOT?: PostWhereInput[] | PostWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  createdAt?: DateTime
  createdAt_not?: DateTime
  createdAt_in?: DateTime[] | DateTime
  createdAt_not_in?: DateTime[] | DateTime
  createdAt_lt?: DateTime
  createdAt_lte?: DateTime
  createdAt_gt?: DateTime
  createdAt_gte?: DateTime
  updatedAt?: DateTime
  updatedAt_not?: DateTime
  updatedAt_in?: DateTime[] | DateTime
  updatedAt_not_in?: DateTime[] | DateTime
  updatedAt_lt?: DateTime
  updatedAt_lte?: DateTime
  updatedAt_gt?: DateTime
  updatedAt_gte?: DateTime
  isPublished?: Boolean
  isPublished_not?: Boolean
  title?: String
  title_not?: String
  title_in?: String[] | String
  title_not_in?: String[] | String
  title_lt?: String
  title_lte?: String
  title_gt?: String
  title_gte?: String
  title_contains?: String
  title_not_contains?: String
  title_starts_with?: String
  title_not_starts_with?: String
  title_ends_with?: String
  title_not_ends_with?: String
  text?: String
  text_not?: String
  text_in?: String[] | String
  text_not_in?: String[] | String
  text_lt?: String
  text_lte?: String
  text_gt?: String
  text_gte?: String
  text_contains?: String
  text_not_contains?: String
  text_starts_with?: String
  text_not_starts_with?: String
  text_ends_with?: String
  text_not_ends_with?: String
  author?: UserWhereInput
}

export interface CategoryUpdateManyWithoutTasksInput {
  create?: CategoryCreateWithoutTasksInput[] | CategoryCreateWithoutTasksInput
  connect?: CategoryWhereUniqueInput[] | CategoryWhereUniqueInput
  disconnect?: CategoryWhereUniqueInput[] | CategoryWhereUniqueInput
  delete?: CategoryWhereUniqueInput[] | CategoryWhereUniqueInput
  update?: CategoryUpdateWithWhereUniqueWithoutTasksInput[] | CategoryUpdateWithWhereUniqueWithoutTasksInput
  upsert?: CategoryUpsertWithWhereUniqueWithoutTasksInput[] | CategoryUpsertWithWhereUniqueWithoutTasksInput
}

export interface PaymentAccountWhereInput {
  AND?: PaymentAccountWhereInput[] | PaymentAccountWhereInput
  OR?: PaymentAccountWhereInput[] | PaymentAccountWhereInput
  NOT?: PaymentAccountWhereInput[] | PaymentAccountWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  createdAt?: DateTime
  createdAt_not?: DateTime
  createdAt_in?: DateTime[] | DateTime
  createdAt_not_in?: DateTime[] | DateTime
  createdAt_lt?: DateTime
  createdAt_lte?: DateTime
  createdAt_gt?: DateTime
  createdAt_gte?: DateTime
  type?: PAYMENT_PROVIDER
  type_not?: PAYMENT_PROVIDER
  type_in?: PAYMENT_PROVIDER[] | PAYMENT_PROVIDER
  type_not_in?: PAYMENT_PROVIDER[] | PAYMENT_PROVIDER
  user?: UserWhereInput
  payments_every?: PaymentWhereInput
  payments_some?: PaymentWhereInput
  payments_none?: PaymentWhereInput
  paypal?: PaypalInformationWhereInput
  creditcard?: CreditCardInformationWhereInput
}

export interface CategoryUpdateWithWhereUniqueWithoutTasksInput {
  where: CategoryWhereUniqueInput
  data: CategoryUpdateWithoutTasksDataInput
}

export interface PostSubscriptionWhereInput {
  AND?: PostSubscriptionWhereInput[] | PostSubscriptionWhereInput
  OR?: PostSubscriptionWhereInput[] | PostSubscriptionWhereInput
  NOT?: PostSubscriptionWhereInput[] | PostSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: PostWhereInput
}

export interface CategoryUpdateWithoutTasksDataInput {
  name?: String
  description?: String
  createdBy?: UserUpdateOneInput
}

export interface CategoryWhereUniqueInput {
  id?: ID_Input
}

export interface CategoryUpsertWithWhereUniqueWithoutTasksInput {
  where: CategoryWhereUniqueInput
  update: CategoryUpdateWithoutTasksDataInput
  create: CategoryCreateWithoutTasksInput
}

export interface PaymentAccountWhereUniqueInput {
  id?: ID_Input
}

export interface PriorityUpdateOneInput {
  create?: PriorityCreateInput
  connect?: PriorityWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: PriorityUpdateDataInput
  upsert?: PriorityUpsertNestedInput
}

export interface FileWhereUniqueInput {
  id?: ID_Input
  secret?: String
  url?: String
}

export interface PriorityUpdateDataInput {
  name?: String
  description?: String
  createdBy?: UserUpdateOneInput
}

export interface PaymentAccountUpdateWithoutCreditcardDataInput {
  type?: PAYMENT_PROVIDER
  user?: UserUpdateOneInput
  payments?: PaymentUpdateManyWithoutPaymentMethodInput
  paypal?: PaypalInformationUpdateOneWithoutPaymentAccountInput
}

export interface PriorityUpsertNestedInput {
  update: PriorityUpdateDataInput
  create: PriorityCreateInput
}

export interface PaymentUpdateWithoutPaymentMethodDataInput {
  serviceFee?: Float
  placePrice?: Float
  totalPrice?: Float
}

export interface TaskUpdateManyInput {
  create?: TaskCreateInput[] | TaskCreateInput
  connect?: TaskWhereUniqueInput[] | TaskWhereUniqueInput
  disconnect?: TaskWhereUniqueInput[] | TaskWhereUniqueInput
  delete?: TaskWhereUniqueInput[] | TaskWhereUniqueInput
  update?: TaskUpdateWithWhereUniqueNestedInput[] | TaskUpdateWithWhereUniqueNestedInput
  upsert?: TaskUpsertWithWhereUniqueNestedInput[] | TaskUpsertWithWhereUniqueNestedInput
}

export interface PaypalInformationUpsertWithoutPaymentAccountInput {
  update: PaypalInformationUpdateWithoutPaymentAccountDataInput
  create: PaypalInformationCreateWithoutPaymentAccountInput
}

export interface TaskUpdateWithWhereUniqueNestedInput {
  where: TaskWhereUniqueInput
  data: TaskUpdateDataInput
}

export interface UserUpdateOneWithoutNotificationsInput {
  create?: UserCreateWithoutNotificationsInput
  connect?: UserWhereUniqueInput
  delete?: Boolean
  update?: UserUpdateWithoutNotificationsDataInput
  upsert?: UserUpsertWithoutNotificationsInput
}

export interface TaskUpdateDataInput {
  title?: String
  description?: String
  startDate?: DateTime
  finishDate?: DateTime
  isComplete?: Boolean
  duration?: Int
  status?: TASK_STATUS
  createdBy?: UserUpdateOneWithoutTasksInput
  categories?: CategoryUpdateManyWithoutTasksInput
  priority?: PriorityUpdateOneInput
  subTasks?: TaskUpdateManyInput
  tags?: TagUpdateManyInput
  attachments?: FileUpdateManyInput
}

export interface LocationUpdateOneInput {
  create?: LocationCreateInput
  connect?: LocationWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: LocationUpdateDataInput
  upsert?: LocationUpsertNestedInput
}

export interface UserUpdateOneWithoutTasksInput {
  create?: UserCreateWithoutTasksInput
  connect?: UserWhereUniqueInput
  delete?: Boolean
  update?: UserUpdateWithoutTasksDataInput
  upsert?: UserUpsertWithoutTasksInput
}

export interface EventWhereInput {
  AND?: EventWhereInput[] | EventWhereInput
  OR?: EventWhereInput[] | EventWhereInput
  NOT?: EventWhereInput[] | EventWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  createdAt?: DateTime
  createdAt_not?: DateTime
  createdAt_in?: DateTime[] | DateTime
  createdAt_not_in?: DateTime[] | DateTime
  createdAt_lt?: DateTime
  createdAt_lte?: DateTime
  createdAt_gt?: DateTime
  createdAt_gte?: DateTime
  updatedAt?: DateTime
  updatedAt_not?: DateTime
  updatedAt_in?: DateTime[] | DateTime
  updatedAt_not_in?: DateTime[] | DateTime
  updatedAt_lt?: DateTime
  updatedAt_lte?: DateTime
  updatedAt_gt?: DateTime
  updatedAt_gte?: DateTime
  title?: String
  title_not?: String
  title_in?: String[] | String
  title_not_in?: String[] | String
  title_lt?: String
  title_lte?: String
  title_gt?: String
  title_gte?: String
  title_contains?: String
  title_not_contains?: String
  title_starts_with?: String
  title_not_starts_with?: String
  title_ends_with?: String
  title_not_ends_with?: String
  description?: String
  description_not?: String
  description_in?: String[] | String
  description_not_in?: String[] | String
  description_lt?: String
  description_lte?: String
  description_gt?: String
  description_gte?: String
  description_contains?: String
  description_not_contains?: String
  description_starts_with?: String
  description_not_starts_with?: String
  description_ends_with?: String
  description_not_ends_with?: String
  date?: DateTime
  date_not?: DateTime
  date_in?: DateTime[] | DateTime
  date_not_in?: DateTime[] | DateTime
  date_lt?: DateTime
  date_lte?: DateTime
  date_gt?: DateTime
  date_gte?: DateTime
  createdBy?: UserWhereInput
  location?: LocationWhereInput
  tags_every?: TagWhereInput
  tags_some?: TagWhereInput
  tags_none?: TagWhereInput
}

export interface UserUpdateWithoutTasksDataInput {
  email?: String
  password?: String
  isAdmin?: Boolean
  role?: Role
  firstName?: String
  lastName?: String
  phone?: String
  avatarColor?: String
  posts?: PostUpdateManyWithoutAuthorInput
  notifications?: NotificationUpdateManyWithoutUserInput
}

export interface PriorityWhereInput {
  AND?: PriorityWhereInput[] | PriorityWhereInput
  OR?: PriorityWhereInput[] | PriorityWhereInput
  NOT?: PriorityWhereInput[] | PriorityWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  createdAt?: DateTime
  createdAt_not?: DateTime
  createdAt_in?: DateTime[] | DateTime
  createdAt_not_in?: DateTime[] | DateTime
  createdAt_lt?: DateTime
  createdAt_lte?: DateTime
  createdAt_gt?: DateTime
  createdAt_gte?: DateTime
  updatedAt?: DateTime
  updatedAt_not?: DateTime
  updatedAt_in?: DateTime[] | DateTime
  updatedAt_not_in?: DateTime[] | DateTime
  updatedAt_lt?: DateTime
  updatedAt_lte?: DateTime
  updatedAt_gt?: DateTime
  updatedAt_gte?: DateTime
  name?: String
  name_not?: String
  name_in?: String[] | String
  name_not_in?: String[] | String
  name_lt?: String
  name_lte?: String
  name_gt?: String
  name_gte?: String
  name_contains?: String
  name_not_contains?: String
  name_starts_with?: String
  name_not_starts_with?: String
  name_ends_with?: String
  name_not_ends_with?: String
  description?: String
  description_not?: String
  description_in?: String[] | String
  description_not_in?: String[] | String
  description_lt?: String
  description_lte?: String
  description_gt?: String
  description_gte?: String
  description_contains?: String
  description_not_contains?: String
  description_starts_with?: String
  description_not_starts_with?: String
  description_ends_with?: String
  description_not_ends_with?: String
  createdBy?: UserWhereInput
}

export interface PostUpdateManyWithoutAuthorInput {
  create?: PostCreateWithoutAuthorInput[] | PostCreateWithoutAuthorInput
  connect?: PostWhereUniqueInput[] | PostWhereUniqueInput
  disconnect?: PostWhereUniqueInput[] | PostWhereUniqueInput
  delete?: PostWhereUniqueInput[] | PostWhereUniqueInput
  update?: PostUpdateWithWhereUniqueWithoutAuthorInput[] | PostUpdateWithWhereUniqueWithoutAuthorInput
  upsert?: PostUpsertWithWhereUniqueWithoutAuthorInput[] | PostUpsertWithWhereUniqueWithoutAuthorInput
}

export interface EventWhereUniqueInput {
  id?: ID_Input
}

export interface PostUpdateWithWhereUniqueWithoutAuthorInput {
  where: PostWhereUniqueInput
  data: PostUpdateWithoutAuthorDataInput
}

export interface TaskUpdateInput {
  title?: String
  description?: String
  startDate?: DateTime
  finishDate?: DateTime
  isComplete?: Boolean
  duration?: Int
  status?: TASK_STATUS
  createdBy?: UserUpdateOneWithoutTasksInput
  categories?: CategoryUpdateManyWithoutTasksInput
  priority?: PriorityUpdateOneInput
  subTasks?: TaskUpdateManyInput
  tags?: TagUpdateManyInput
  attachments?: FileUpdateManyInput
}

export interface PostUpdateWithoutAuthorDataInput {
  isPublished?: Boolean
  title?: String
  text?: String
}

export interface PaymentAccountUpsertWithoutPaymentsInput {
  update: PaymentAccountUpdateWithoutPaymentsDataInput
  create: PaymentAccountCreateWithoutPaymentsInput
}

export interface PostUpsertWithWhereUniqueWithoutAuthorInput {
  where: PostWhereUniqueInput
  update: PostUpdateWithoutAuthorDataInput
  create: PostCreateWithoutAuthorInput
}

export interface CityUpsertNestedInput {
  update: CityUpdateDataInput
  create: CityCreateInput
}

export interface NotificationUpdateManyWithoutUserInput {
  create?: NotificationCreateWithoutUserInput[] | NotificationCreateWithoutUserInput
  connect?: NotificationWhereUniqueInput[] | NotificationWhereUniqueInput
  disconnect?: NotificationWhereUniqueInput[] | NotificationWhereUniqueInput
  delete?: NotificationWhereUniqueInput[] | NotificationWhereUniqueInput
  update?: NotificationUpdateWithWhereUniqueWithoutUserInput[] | NotificationUpdateWithWhereUniqueWithoutUserInput
  upsert?: NotificationUpsertWithWhereUniqueWithoutUserInput[] | NotificationUpsertWithWhereUniqueWithoutUserInput
}

export interface MessageWhereInput {
  AND?: MessageWhereInput[] | MessageWhereInput
  OR?: MessageWhereInput[] | MessageWhereInput
  NOT?: MessageWhereInput[] | MessageWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  createdAt?: DateTime
  createdAt_not?: DateTime
  createdAt_in?: DateTime[] | DateTime
  createdAt_not_in?: DateTime[] | DateTime
  createdAt_lt?: DateTime
  createdAt_lte?: DateTime
  createdAt_gt?: DateTime
  createdAt_gte?: DateTime
  deliveredAt?: DateTime
  deliveredAt_not?: DateTime
  deliveredAt_in?: DateTime[] | DateTime
  deliveredAt_not_in?: DateTime[] | DateTime
  deliveredAt_lt?: DateTime
  deliveredAt_lte?: DateTime
  deliveredAt_gt?: DateTime
  deliveredAt_gte?: DateTime
  readAt?: DateTime
  readAt_not?: DateTime
  readAt_in?: DateTime[] | DateTime
  readAt_not_in?: DateTime[] | DateTime
  readAt_lt?: DateTime
  readAt_lte?: DateTime
  readAt_gt?: DateTime
  readAt_gte?: DateTime
  from?: UserWhereInput
  to?: UserWhereInput
}

export interface CityWhereUniqueInput {
  id?: ID_Input
}

export interface UserUpsertWithoutTasksInput {
  update: UserUpdateWithoutTasksDataInput
  create: UserCreateWithoutTasksInput
}

export interface NotificationUpsertWithWhereUniqueWithoutUserInput {
  where: NotificationWhereUniqueInput
  update: NotificationUpdateWithoutUserDataInput
  create: NotificationCreateWithoutUserInput
}

export interface NotificationUpdateWithoutUserDataInput {
  type?: NOTIFICATION_TYPE
  link?: String
  readDate?: DateTime
}

export interface NotificationUpdateWithWhereUniqueWithoutUserInput {
  where: NotificationWhereUniqueInput
  data: NotificationUpdateWithoutUserDataInput
}

export interface PaymentAccountUpdateWithoutPaypalDataInput {
  type?: PAYMENT_PROVIDER
  user?: UserUpdateOneInput
  payments?: PaymentUpdateManyWithoutPaymentMethodInput
  creditcard?: CreditCardInformationUpdateOneWithoutPaymentAccountInput
}

export interface PictureSubscriptionWhereInput {
  AND?: PictureSubscriptionWhereInput[] | PictureSubscriptionWhereInput
  OR?: PictureSubscriptionWhereInput[] | PictureSubscriptionWhereInput
  NOT?: PictureSubscriptionWhereInput[] | PictureSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: PictureWhereInput
}

export interface PaymentAccountUpdateOneWithoutPaymentsInput {
  create?: PaymentAccountCreateWithoutPaymentsInput
  connect?: PaymentAccountWhereUniqueInput
  delete?: Boolean
  update?: PaymentAccountUpdateWithoutPaymentsDataInput
  upsert?: PaymentAccountUpsertWithoutPaymentsInput
}

/*
 * An object with an ID

 */
export interface Node {
  id: ID_Output
}

export interface FilePreviousValues {
  id: ID_Output
  name: String
  size: Int
  secret: String
  contentType: String
  createdAt: DateTime
  updatedAt: DateTime
  url: String
}

export interface BatchPayload {
  count: Long
}

export interface Priority extends Node {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  createdBy: User
  name?: String
  description?: String
}

export interface Tag {
  name: String
  description?: String
  color: String
}

export interface AggregateFile {
  count: Int
}

export interface Picture {
  url: String
}

export interface UserPreviousValues {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  email: String
  password: String
  isAdmin: Boolean
  role: Role
  firstName?: String
  lastName?: String
  phone?: String
  avatarColor?: String
}

export interface FileSubscriptionPayload {
  mutation: MutationType
  node?: File
  updatedFields?: String[]
  previousValues?: FilePreviousValues
}

/*
 * A connection to a list of items.

 */
export interface FileConnection {
  pageInfo: PageInfo
  edges: FileEdge[]
  aggregate: AggregateFile
}

/*
 * An edge in a connection.

 */
export interface FileEdge {
  node: File
  cursor: String
}

/*
 * A connection to a list of items.

 */
export interface LocationConnection {
  pageInfo: PageInfo
  edges: LocationEdge[]
  aggregate: AggregateLocation
}

export interface AggregateLocation {
  count: Int
}

/*
 * An edge in a connection.

 */
export interface UserEdge {
  node: User
  cursor: String
}

export interface Task extends Node {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  createdBy: User
  categories?: Category[]
  title?: String
  description?: String
  startDate?: DateTime
  finishDate?: DateTime
  isComplete: Boolean
  duration?: Int
  priority?: Priority
  subTasks?: Task[]
  status?: TASK_STATUS
  tags?: Tag[]
  attachments?: File[]
}

export interface AggregateTag {
  count: Int
}

export interface LocationPreviousValues {
  id: ID_Output
  lat: Float
  lng: Float
  address?: String
  directions?: String
}

/*
 * A connection to a list of items.

 */
export interface TagConnection {
  pageInfo: PageInfo
  edges: TagEdge[]
  aggregate: AggregateTag
}

export interface PictureSubscriptionPayload {
  mutation: MutationType
  node?: Picture
  updatedFields?: String[]
  previousValues?: PicturePreviousValues
}

/*
 * An edge in a connection.

 */
export interface TaskEdge {
  node: Task
  cursor: String
}

export interface PicturePreviousValues {
  url: String
}

export interface AggregateCity {
  count: Int
}

export interface LocationSubscriptionPayload {
  mutation: MutationType
  node?: Location
  updatedFields?: String[]
  previousValues?: LocationPreviousValues
}

/*
 * A connection to a list of items.

 */
export interface CityConnection {
  pageInfo: PageInfo
  edges: CityEdge[]
  aggregate: AggregateCity
}

export interface CategorySubscriptionPayload {
  mutation: MutationType
  node?: Category
  updatedFields?: String[]
  previousValues?: CategoryPreviousValues
}

/*
 * An edge in a connection.

 */
export interface PriorityEdge {
  node: Priority
  cursor: String
}

export interface CategoryPreviousValues {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  name?: String
  description?: String
}

export interface AggregateCreditCardInformation {
  count: Int
}

export interface CreditCardInformation extends Node {
  id: ID_Output
  createdAt: DateTime
  cardNumber: String
  expiresOnMonth: Int
  expiresOnYear: Int
  securityCode: String
  firstName: String
  lastName: String
  postalCode: String
  country: String
  paymentAccount?: PaymentAccount
}

/*
 * A connection to a list of items.

 */
export interface CreditCardInformationConnection {
  pageInfo: PageInfo
  edges: CreditCardInformationEdge[]
  aggregate: AggregateCreditCardInformation
}

export interface PostSubscriptionPayload {
  mutation: MutationType
  node?: Post
  updatedFields?: String[]
  previousValues?: PostPreviousValues
}

/*
 * An edge in a connection.

 */
export interface PaypalInformationEdge {
  node: PaypalInformation
  cursor: String
}

export interface PostPreviousValues {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  isPublished: Boolean
  title: String
  text: String
}

export interface AggregatePaymentAccount {
  count: Int
}

export interface PaypalInformation extends Node {
  id: ID_Output
  createdAt: DateTime
  email: String
  paymentAccount: PaymentAccount
}

/*
 * A connection to a list of items.

 */
export interface PaymentAccountConnection {
  pageInfo: PageInfo
  edges: PaymentAccountEdge[]
  aggregate: AggregatePaymentAccount
}

export interface StatusUpdateSubscriptionPayload {
  mutation: MutationType
  node?: StatusUpdate
  updatedFields?: String[]
  previousValues?: StatusUpdatePreviousValues
}

/*
 * An edge in a connection.

 */
export interface PaymentEdge {
  node: Payment
  cursor: String
}

export interface StatusUpdatePreviousValues {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  text: String
  previousStatus: String
  newStatus: String
}

export interface AggregateNotification {
  count: Int
}

export interface PaymentAccount extends Node {
  id: ID_Output
  createdAt: DateTime
  type?: PAYMENT_PROVIDER
  user: User
  payments?: Payment[]
  paypal?: PaypalInformation
  creditcard?: CreditCardInformation
}

/*
 * A connection to a list of items.

 */
export interface NotificationConnection {
  pageInfo: PageInfo
  edges: NotificationEdge[]
  aggregate: AggregateNotification
}

export interface ReminderSubscriptionPayload {
  mutation: MutationType
  node?: Reminder
  updatedFields?: String[]
  previousValues?: ReminderPreviousValues
}

/*
 * An edge in a connection.

 */
export interface MessageEdge {
  node: Message
  cursor: String
}

export interface ReminderPreviousValues {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  title: String
  description: String
}

export interface AggregateEvent {
  count: Int
}

export interface Payment extends Node {
  id: ID_Output
  createdAt: DateTime
  serviceFee: Float
  placePrice: Float
  totalPrice: Float
  paymentMethod: PaymentAccount
}

/*
 * A connection to a list of items.

 */
export interface EventConnection {
  pageInfo: PageInfo
  edges: EventEdge[]
  aggregate: AggregateEvent
}

export interface EventSubscriptionPayload {
  mutation: MutationType
  node?: Event
  updatedFields?: String[]
  previousValues?: EventPreviousValues
}

/*
 * An edge in a connection.

 */
export interface ReminderEdge {
  node: Reminder
  cursor: String
}

export interface EventPreviousValues {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  title: String
  description: String
  date: DateTime
}

export interface AggregateStatusUpdate {
  count: Int
}

export interface Message extends Node {
  id: ID_Output
  createdAt: DateTime
  from: User
  to: User
  deliveredAt: DateTime
  readAt: DateTime
}

/*
 * A connection to a list of items.

 */
export interface StatusUpdateConnection {
  pageInfo: PageInfo
  edges: StatusUpdateEdge[]
  aggregate: AggregateStatusUpdate
}

export interface MessageSubscriptionPayload {
  mutation: MutationType
  node?: Message
  updatedFields?: String[]
  previousValues?: MessagePreviousValues
}

/*
 * An edge in a connection.

 */
export interface PostEdge {
  node: Post
  cursor: String
}

export interface MessagePreviousValues {
  id: ID_Output
  createdAt: DateTime
  deliveredAt: DateTime
  readAt: DateTime
}

export interface AggregateCategory {
  count: Int
}

export interface City extends Node {
  id: ID_Output
  name: String
}

/*
 * A connection to a list of items.

 */
export interface CategoryConnection {
  pageInfo: PageInfo
  edges: CategoryEdge[]
  aggregate: AggregateCategory
}

export interface NotificationSubscriptionPayload {
  mutation: MutationType
  node?: Notification
  updatedFields?: String[]
  previousValues?: NotificationPreviousValues
}

/*
 * An edge in a connection.

 */
export interface PictureEdge {
  node: Picture
  cursor: String
}

export interface NotificationPreviousValues {
  id: ID_Output
  createdAt: DateTime
  type?: NOTIFICATION_TYPE
  link: String
  readDate: DateTime
}

/*
 * A connection to a list of items.

 */
export interface PictureConnection {
  pageInfo: PageInfo
  edges: PictureEdge[]
  aggregate: AggregatePicture
}

export interface Location extends Node {
  id: ID_Output
  lat: Float
  lng: Float
  city?: City
  address?: String
  directions?: String
}

export interface AggregateUser {
  count: Int
}

export interface PaymentSubscriptionPayload {
  mutation: MutationType
  node?: Payment
  updatedFields?: String[]
  previousValues?: PaymentPreviousValues
}

/*
 * An edge in a connection.

 */
export interface TagEdge {
  node: Tag
  cursor: String
}

export interface PaymentPreviousValues {
  id: ID_Output
  createdAt: DateTime
  serviceFee: Float
  placePrice: Float
  totalPrice: Float
}

/*
 * A connection to a list of items.

 */
export interface TaskConnection {
  pageInfo: PageInfo
  edges: TaskEdge[]
  aggregate: AggregateTask
}

export interface Event extends Node {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  createdBy: User
  title: String
  description: String
  date: DateTime
  location?: Location
  tags?: Tag[]
}

export interface AggregatePriority {
  count: Int
}

export interface PaymentAccountSubscriptionPayload {
  mutation: MutationType
  node?: PaymentAccount
  updatedFields?: String[]
  previousValues?: PaymentAccountPreviousValues
}

/*
 * An edge in a connection.

 */
export interface CreditCardInformationEdge {
  node: CreditCardInformation
  cursor: String
}

export interface PaymentAccountPreviousValues {
  id: ID_Output
  createdAt: DateTime
  type?: PAYMENT_PROVIDER
}

/*
 * A connection to a list of items.

 */
export interface PaypalInformationConnection {
  pageInfo: PageInfo
  edges: PaypalInformationEdge[]
  aggregate: AggregatePaypalInformation
}

export interface File extends Node {
  id: ID_Output
  name: String
  size: Int
  secret: String
  contentType: String
  createdAt: DateTime
  updatedAt: DateTime
  url: String
}

export interface AggregatePayment {
  count: Int
}

export interface PaypalInformationSubscriptionPayload {
  mutation: MutationType
  node?: PaypalInformation
  updatedFields?: String[]
  previousValues?: PaypalInformationPreviousValues
}

/*
 * An edge in a connection.

 */
export interface NotificationEdge {
  node: Notification
  cursor: String
}

export interface PaypalInformationPreviousValues {
  id: ID_Output
  createdAt: DateTime
  email: String
}

/*
 * A connection to a list of items.

 */
export interface MessageConnection {
  pageInfo: PageInfo
  edges: MessageEdge[]
  aggregate: AggregateMessage
}

export interface Reminder extends Node {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  createdBy: User
  title: String
  description: String
}

export interface AggregateReminder {
  count: Int
}

export interface CreditCardInformationSubscriptionPayload {
  mutation: MutationType
  node?: CreditCardInformation
  updatedFields?: String[]
  previousValues?: CreditCardInformationPreviousValues
}

/*
 * An edge in a connection.

 */
export interface StatusUpdateEdge {
  node: StatusUpdate
  cursor: String
}

export interface CreditCardInformationPreviousValues {
  id: ID_Output
  createdAt: DateTime
  cardNumber: String
  expiresOnMonth: Int
  expiresOnYear: Int
  securityCode: String
  firstName: String
  lastName: String
  postalCode: String
  country: String
}

/*
 * A connection to a list of items.

 */
export interface PostConnection {
  pageInfo: PageInfo
  edges: PostEdge[]
  aggregate: AggregatePost
}

export interface StatusUpdate extends Node {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  createdBy: User
  task: Task
  text: String
  previousStatus: String
  newStatus: String
}

export interface AggregatePicture {
  count: Int
}

export interface PrioritySubscriptionPayload {
  mutation: MutationType
  node?: Priority
  updatedFields?: String[]
  previousValues?: PriorityPreviousValues
}

/*
 * An edge in a connection.

 */
export interface LocationEdge {
  node: Location
  cursor: String
}

export interface PriorityPreviousValues {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  name?: String
  description?: String
}

export interface AggregateTask {
  count: Int
}

export interface Category extends Node {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  createdBy: User
  name?: String
  description?: String
  tasks?: Task[]
}

/*
 * A connection to a list of items.

 */
export interface PriorityConnection {
  pageInfo: PageInfo
  edges: PriorityEdge[]
  aggregate: AggregatePriority
}

export interface CitySubscriptionPayload {
  mutation: MutationType
  node?: City
  updatedFields?: String[]
  previousValues?: CityPreviousValues
}

/*
 * An edge in a connection.

 */
export interface PaymentAccountEdge {
  node: PaymentAccount
  cursor: String
}

export interface CityPreviousValues {
  id: ID_Output
  name: String
}

export interface AggregateMessage {
  count: Int
}

export interface Notification extends Node {
  id: ID_Output
  createdAt: DateTime
  type?: NOTIFICATION_TYPE
  user: User
  link: String
  readDate: DateTime
}

/*
 * A connection to a list of items.

 */
export interface ReminderConnection {
  pageInfo: PageInfo
  edges: ReminderEdge[]
  aggregate: AggregateReminder
}

export interface TaskSubscriptionPayload {
  mutation: MutationType
  node?: Task
  updatedFields?: String[]
  previousValues?: TaskPreviousValues
}

/*
 * An edge in a connection.

 */
export interface CategoryEdge {
  node: Category
  cursor: String
}

export interface TaskPreviousValues {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  title?: String
  description?: String
  startDate?: DateTime
  finishDate?: DateTime
  isComplete: Boolean
  duration?: Int
  status?: TASK_STATUS
}

/*
 * A connection to a list of items.

 */
export interface UserConnection {
  pageInfo: PageInfo
  edges: UserEdge[]
  aggregate: AggregateUser
}

export interface Post extends Node {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  isPublished: Boolean
  title: String
  text: String
  author: User
}

export interface AggregatePaypalInformation {
  count: Int
}

/*
 * An edge in a connection.

 */
export interface EventEdge {
  node: Event
  cursor: String
}

export interface UserSubscriptionPayload {
  mutation: MutationType
  node?: User
  updatedFields?: String[]
  previousValues?: UserPreviousValues
}

export interface User extends Node {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  email: String
  password: String
  isAdmin: Boolean
  role: Role
  firstName?: String
  lastName?: String
  phone?: String
  avatarColor?: String
  tasks?: Task[]
  posts?: Post[]
  notifications?: Notification[]
}

export interface TagPreviousValues {
  name: String
  description?: String
  color: String
}

export interface TagSubscriptionPayload {
  mutation: MutationType
  node?: Tag
  updatedFields?: String[]
  previousValues?: TagPreviousValues
}

export interface AggregatePost {
  count: Int
}

/*
 * A connection to a list of items.

 */
export interface PaymentConnection {
  pageInfo: PageInfo
  edges: PaymentEdge[]
  aggregate: AggregatePayment
}

/*
 * An edge in a connection.

 */
export interface CityEdge {
  node: City
  cursor: String
}

/*
 * Information about pagination in a connection.

 */
export interface PageInfo {
  hasNextPage: Boolean
  hasPreviousPage: Boolean
  startCursor?: String
  endCursor?: String
}

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number
export type ID_Output = string

/*
The `Long` scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
*/
export type Long = string

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string

export type DateTime = Date | string

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 
*/
export type Int = number

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean

/*
The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](http://en.wikipedia.org/wiki/IEEE_floating_point). 
*/
export type Float = number