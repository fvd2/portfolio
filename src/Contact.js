import { MailIcon } from '@heroicons/react/solid'
import { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XIcon } from '@heroicons/react/outline'

const Contact = ({ open, setOpen }) => {
	return (
		<Transition.Root show={open} as={Fragment}>
			<Dialog
				as="div"
				className="fixed inset-0 overflow-hidden z-50"
				onClose={setOpen}>
				<div className="absolute inset-0">
					<Dialog.Overlay className="absolute inset-0" />

					<div className="flex mx-auto justify-self-auto max-w-full">
						<Transition.Child
							as={Fragment}
							enter="ease-in duration-300"
							enterFrom="opacity-0"
							enterTo="opacity-100"
							leave="ease-out duration-300"
							leaveFrom="opacity-100"
							leaveTo="opacity-0">
							<div className="w-screen max-w-md">
								<div className="h-full flex flex-col py-6 bg-white shadow-xl overflow-y-scroll">
									<div className="px-4 sm:px-6">
										<div className="flex items-start justify-between">
											<Dialog.Title className="text-lg font-medium text-gray-900">
												Contact me
											</Dialog.Title>
											<div className="ml-3 h-7 flex items-center">
												<button
													type="button"
													className="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
													onClick={() =>
														setOpen(false)
													}>
													<span className="sr-only">
														Close panel
													</span>
													<XIcon
														className="h-6 w-6"
														aria-hidden="true"
													/>
												</button>
											</div>
										</div>
									</div>
									<div className="mt-6 relative flex-1 px-4 sm:px-6">
										<div>
											<div>
												<label
													htmlFor="email"
													className="block text-sm font-medium text-gray-700">
													Email
												</label>
												<div className="mt-1 relative rounded-md shadow-sm">
													<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
														<MailIcon
															className="h-5 w-5 text-gray-400"
															aria-hidden="true"
														/>
													</div>
													<input
														type="text"
														name="email"
														id="email"
														className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
														placeholder="you@example.com"
													/>
												</div>
											</div>
											<div>
												<label
													htmlFor="phone-number"
													className="block text-sm font-medium text-gray-700">
													Phone Number
												</label>
												<div className="mt-1 relative rounded-md shadow-sm">
													<div className="absolute inset-y-0 left-0 flex items-center">
														<label
															htmlFor="country"
															className="sr-only">
															Country
														</label>
														<select
															id="country"
															name="country"
															className="focus:ring-indigo-500 focus:border-indigo-500 h-full py-0 pl-3 pr-7 border-transparent bg-transparent text-gray-500 sm:text-sm rounded-md">
															<option>US</option>
															<option>CA</option>
															<option>EU</option>
														</select>
													</div>
													<input
														type="text"
														name="phone-number"
														id="phone-number"
														className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-16 sm:text-sm border-gray-300 rounded-md"
														placeholder="+1 (555) 987-6543"
													/>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</Transition.Child>
					</div>
				</div>
			</Dialog>
		</Transition.Root>
	)
}

export default Contact
