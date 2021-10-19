import { MailIcon, PhoneIcon } from '@heroicons/react/outline'
import { Formik, Form } from 'formik'
import emailjs from 'emailjs-com'

const Contact = ({onOpenToast}) => {
	return (
		<section className="max-w-7xl mx-auto md:flex md:items-center md:justify-between bg-gradient-to-br from-gray-900 to-blue-900">
			{/* Contact section */}
			<div className="text-white">
				<div className="relative">
					<div className="grid grid-cols-1 lg:grid-cols-3">
						{/* Contact information */}
						<div className="relative overflow-hidden py-10 px-6 xl:px-12">
							<h3 className="text-xl font-medium">
								Get in touch
							</h3>
							<p className="mt-6 text-base text-blue-50 max-w-3xl">
								If you would like to connect, feel free to reach
								out via phone, email or this form
							</p>
							<dl className="mt-4 space-y-6">
								<dt>
									<span className="sr-only">
										Phone number
									</span>
								</dt>
								<dd className="flex text-base text-blue-50">
									<PhoneIcon
										className="flex-shrink-0 w-6 h-6 text-blue-100"
										aria-hidden="true"
									/>
									<span className="ml-3">
										+31 6 2842 8414
									</span>
								</dd>
								<dt>
									<span className="sr-only">Email</span>
								</dt>
								<dd className="flex text-base text-blue-50">
									<MailIcon
										className="flex-shrink-0 w-6 h-6 text-blue-100"
										aria-hidden="true"
									/>
									<span className="ml-3">
										contact@freekvandam.nl
									</span>
								</dd>
							</dl>
						</div>

						{/* Contact form */}
						<div className="bg-gray-100 md:rounded-xl my-10 md:mx-6 px-6 lg:col-span-2">
							<Formik
								initialValues={{
									firstName: '',
									lastName: '',
									email: '',
									phone: '',
									message: ''
								}}
								onSubmit={(values, actions) => {
									setTimeout(() => {
										emailjs.send(
											process.env.REACT_APP_SERVICE_ID,
											process.env.REACT_APP_TEMPLATE_ID,
											values,
											process.env
												.REACT_APP_EMAIL_JS_USER_ID
										)
										actions.setSubmitting(false)
										actions.resetForm()
                                        onOpenToast(true)
									}, 300)
								}}>
								{({ handleSubmit, handleChange, values }) => (
									<Form
										onSubmit={handleSubmit}
										className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
										<div>
											<label
												htmlFor="firstName"
												className="block text-sm font-medium text-warm-gray-900">
												First name
											</label>
											<div className="mt-1">
												<input
													type="text"
													value={values.firstName}
                                                    onChange={handleChange}
													name="firstName"
													id="firstName"
													autoComplete="given-name"
													className="py-3 px-4 block w-full shadow-sm text-warm-gray-900 focus:ring-purple-900 focus:border-blue-900 border-warm-gray-300 rounded-md"
												/>
											</div>
										</div>
										<div>
											<label
												htmlFor="lastName"
												className="block text-sm font-medium text-warm-gray-900">
												Last name
											</label>
											<div className="mt-1">
												<input
													type="text"
                                                    value={values.lastName}
                                                    onChange={handleChange}
													name="lastName"
													id="lastName"
													autoComplete="family-name"
													className="py-3 px-4 block w-full shadow-sm text-warm-gray-900 focus:ring-purple-900 focus:border-blue-900 border-warm-gray-300 rounded-md"
												/>
											</div>
										</div>
										<div>
											<label
												htmlFor="email"
												className="block text-sm font-medium text-warm-gray-900">
												Email
											</label>
											<div className="mt-1">
												<input
													id="email"
                                                    value={values.email}
                                                    onChange={handleChange}
													name="email"
													type="email"
													autoComplete="email"
													className="py-3 px-4 block w-full shadow-sm text-warm-gray-900 focus:ring-purple-900 focus:border-blue-900 border-warm-gray-300 rounded-md"
												/>
											</div>
										</div>
										<div>
											<div className="flex justify-between">
												<label
													htmlFor="phone"
													className="block text-sm font-medium text-warm-gray-900">
													Phone
												</label>
												<span
													id="phone-optional"
													className="text-sm text-warm-gray-500">
													Optional
												</span>
											</div>
											<div className="mt-1">
												<input
													type="text"
                                                    value={values.phone}
                                                    onChange={handleChange}
													name="phone"
													id="phone"
													autoComplete="tel"
													className="py-3 px-4 block w-full shadow-sm text-warm-gray-900 focus:ring-purple-900 focus:border-blue-900 border-warm-gray-300 rounded-md"
													aria-describedby="phone-optional"
												/>
											</div>
										</div>
										<div className="sm:col-span-2">
											<div className="flex justify-between">
												<label
													htmlFor="message"
													className="block text-sm font-medium text-warm-gray-900">
													Message
												</label>
												<span
													id="message-max"
													className="text-sm text-warm-gray-500">
													Max. 500 characters
												</span>
											</div>
											<div className="mt-1">
												<textarea
													id="message"
                                                    value={values.message}
                                                    onChange={handleChange}
													name="message"
													rows={4}
													className="py-3 px-4 block w-full shadow-sm text-warm-gray-900 focus:ring-purple-900 focus:border-blue-900 border border-warm-gray-300 rounded-md"
													aria-describedby="message-max"
													defaultValue={''}
												/>
											</div>
										</div>
										<div className="sm:col-span-2 sm:flex sm:justify-end">
											<button
												type="submit"
												className="mb-3 py-2 px-4 rounded-lg shadow-2xl  drop-shadow-2xl text-white font-semibold bg-gradient-to-br from-blue-900 to-indigo-900 hover:bg-purple-900 focus:outline-none focus:ring-2 focus:ring-purple-900 sm:w-auto">
												Submit
											</button>
										</div>
									</Form>
								)}
							</Formik>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Contact
