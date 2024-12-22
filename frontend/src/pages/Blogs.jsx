import React, { useEffect, useState } from "react";
import axios from "axios";
import Layout from "../components/Layout";
import { IoMdSearch } from "react-icons/io";
const Blogs = () => {
	const [blogs, setBlogs] = useState([]);
	const [loading, setLoading] = useState(true);
	const [data, setData] = useState({});
	const [searchTerm, setSearchTerm] = useState("");
	const [isExpanded, setIsExpanded] = useState(false);

	useEffect(() => {
		const fun = async () => {
			try {
				setLoading(true);
				const resp = await axios.get("http://localhost:8080/blogs");
				setBlogs(resp?.data?.blogs);
				setLoading(false);
				setData(resp?.data?.blogs[0]);
				console.log(blogs, "blogs updated");
				const response = await axios.get(
					`http://localhost:8080/blogs${""}`
				);
				console.log(response);
			} catch (error) {
				console.error(error);
			}
		};
		fun();
	}, [setBlogs]);

	const setBlogData = (index) => {
		const b = blogs[index];
		setData(b);
	};

	const handleCategory = (e) => {
		console.log(e.target.innerHTML);
	};

	const handleInputChange = (e) => {
		setSearchTerm(e.target.value);
		console.log(searchTerm);
	};

	const handleSearchFilter = () => {
		console.log(searchTerm, "asdfghjkl");
	};

	const handleShowMoreClick = () => {
		setIsExpanded(!isExpanded);
	};

	return (
		<Layout>
			{!loading ? (
				<div
					data-theme="light"
					className=" flex h-screen items-center p-20 justify-center">
					<section className="w-2/3 h-screen p-10 overflow-auto scroll-smooth scroll-container shadow-black">
						<img
							src="https://media.istockphoto.com/id/2105091005/photo/young-student-taking-notes-while-e-learning-on-laptop-at-the-university.jpg?s=2048x2048&w=is&k=20&c=mmbRk75WrYstSEqH-xv-yt_BqJZZNSxgu7Hl82EL_zk="
							alt="blog image"
							className="w-full bg-gray-600 h-auto bg-cover shadow-xl"
						/>
						<h1 className="text-2xl m-5">{data.title}</h1>
						<p className="h-auto">{data.summary}</p>

						{/* This paragraph will toggle visibility based on state */}
						{isExpanded && (
							<div className="mt-5">
								<p className="justify-around">
									{data.fullContent} Lorem ipsum dolor sit
									amet consectetur, adipisicing elit.
									Voluptatibus, voluptas esse quam assumenda
									ad minima architecto pariatur nemo
									repellendus temporibus necessitatibus,
									obcaecati nulla ullam officia iste,
									laboriosam similique consequuntur aut
									excepturi corporis. Doloribus accusamus
									fuga, dolorum ipsam, dolore provident
									excepturi rem doloremque minus quo, minima
									laboriosam repellat magni hic beatae
									veritatis. Architecto officiis, magni
									commodi earum ipsa modi quia soluta maxime
									deleniti eum repellat animi voluptas
									deserunt dolorum voluptatibus laboriosam
									harum labore qui asperiores exercitationem
									consectetur accusamus beatae? Temporibus,
									illum recusandae. Velit nostrum voluptatem
									suscipit non dolore quia illo, facilis alias
									doloremque rerum error exercitationem amet
									repellendus placeat nisi! Quos, consequuntur
									quo, odit labore facilis reiciendis iure
									necessitatibus neque velit obcaecati
									provident ab laborum, dolorum quasi ex
									totam. Incidunt accusamus placeat eos ea?
									Corrupti dolorem, quos labore cum at minus
									recusandae, voluptas delectus eligendi
									blanditiis a reprehenderit facilis nobis
									nemo praesentium autem vel dolor culpa,
									itaque similique odio minima? Explicabo
									consequatur perferendis obcaecati ea
									blanditiis voluptatem labore nisi culpa
									commodi voluptate eum porro animi sint nam
									laboriosam ad sequi, non reprehenderit eos.
									Quis soluta repellendus optio dolorem
									excepturi maxime exercitationem aliquam.
									Illo inventore, dicta veritatis quasi autem
									aperiam suscipit quas! Quasi debitis eum quo
									vero nulla animi praesentium ducimus fugiat
									magnam quam incidunt, optio, molestias
									soluta beatae autem ullam?
								</p>
								<p>
									At cupiditate explicabo iure a praesentium!
									Nam accusantium dolores, nostrum beatae quod
									esse pariatur ducimus dolore modi reiciendis
									blanditiis amet nihil, animi eaque sunt quae
									atque dolorum. Voluptates eum impedit omnis
									molestiae expedita necessitatibus tempore.
									Fugiat harum cupiditate placeat quisquam
									modi! Provident sit, deleniti dignissimos
									minima quibusdam, sed cum sequi qui,
									recusandae ab magnam optio corrupti. Ratione
									adipisci consequuntur itaque quam culpa
									molestias ut odio iusto molestiae, repellat
									rerum provident similique natus maxime sit
									commodi dolorem pariatur autem libero
									suscipit quo? Ducimus expedita excepturi
									architecto quis blanditiis natus dicta
									nostrum veniam, voluptatum incidunt sit,
									nulla consequuntur! Esse eaque laudantium,
									dolorum quia voluptatum voluptatibus odit
									vero. Ea, exercitationem. Obcaecati, minima
									rem eum possimus maxime sit itaque at
									ratione earum fugit consequuntur ut
									repellendus pariatur molestiae voluptas
									eaque impedit quos, reprehenderit officiis
									sed nobis, praesentium perspiciatis deserunt
									quaerat. Error magnam ab architecto nulla
									corrupti vel, voluptatem provident dolor quo
									sunt perferendis quisquam aperiam? Sint,
									tenetur amet aperiam quas veniam illum nisi
									consectetur numquam id dicta ad neque
									pariatur cumque ratione! Ea atque molestiae
									repellat a illo sit pariatur vero nemo
									aliquam dolorem necessitatibus voluptatibus
									ab doloribus, assumenda quasi ex sequi
									aperiam maxime eum molestias, cupiditate
									temporibus? Ipsa, nemo! Quisquam alias nisi
									illum, debitis maiores deserunt possimus sed
									cumque eos commodi temporibus aliquam dicta
									voluptates magni! Sit dolorem earum optio
									magni asperiores consequuntur blanditiis
									soluta? Expedita ducimus eius culpa ullam,
									perspiciatis repellendus sed maiores? Sequi
									et temporibus, pariatur at quam deserunt.
									Placeat perferendis velit consectetur
									repudiandae a? Maxime qui dicta animi libero
									eum consequuntur cum voluptas dolor saepe
									architecto voluptatibus distinctio
									perspiciatis, deserunt, corrupti nemo quod
									ad incidunt repellendus tempore, in
									voluptates! Nobis alias sequi numquam
									voluptates vero deleniti qui dolores, ad,
									incidunt in, consequuntur id excepturi unde
									corrupti neque eos quam animi iste.
								</p>
							</div>
						)}

						{/* Show More/Show Less button */}
						<button
							onClick={handleShowMoreClick}
							className="mt-5 text-blue-500 hover:underline">
							{isExpanded ? "Show Less" : "Show More"}
						</button>
					</section>
					<section className="shadow-2xl shadow-zinc-950 w-2/6 h-screen gap-5 flex flex-col p-10 m-4 overflow-auto scroll-smooth scroll-container">
						<section className="bg-red-00 h-auto w-full pl-5 flex justify-center flex-col">
							<div className="w-3/4">
								<h1 className="text-2xl font-semibold mt-5">
									Search
								</h1>
								<label className="flex mt-5">
									<input
										onChange={(e) => handleInputChange(e)}
										type="text"
										value={searchTerm}
										className="grow border-black border-2 rounded-sm"
										placeholder="   Search"
									/>
									<section className="border-black border-2 cursor-pointer rounded-sm bg-green-700 w-10">
										<svg
											onClick={handleSearchFilter}
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 16 16"
											fill="currentColor"
											className="h-8 w-8 opacity-100">
											<path
												fillRule="evenodd"
												d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
												clipRule="evenodd"
											/>
										</svg>
									</section>
								</label>
							</div>
							<div className="mt-5 cursor-pointer">
								<h1 className="font-semibold text-2xl">
									Categories
								</h1>
								<ul className="flex flex-col font-medium gap-1 mt-2 ">
									<li
										onClick={(e) => handleCategory(e)}
										className="hover:font-bold duration-300"
										value={"General"}>
										General
									</li>
									<li
										onClick={(e) => handleCategory(e)}
										className="hover:font-bold duration-300"
										value={"Traval"}>
										Traval
									</li>
									<li
										onClick={(e) => handleCategory(e)}
										className="hover:font-bold duration-300"
										value={"Lifestyle"}>
										Lifestyle
									</li>
									<li
										onClick={(e) => handleCategory(e)}
										className="hover:font-bold duration-300"
										value={"Design"}>
										Design
									</li>
									<li
										onClick={(e) => handleCategory(e)}
										className="hover:font-bold duration-300"
										value={"Creative"}>
										Creative
									</li>
									<li
										onClick={(e) => handleCategory(e)}
										className="hover:font-bold duration-300"
										value={"Education"}>
										Education
									</li>
								</ul>
							</div>
						</section>
						<h1 className="text-3xl">Recent Post</h1>
						{blogs.map((blog, index) => (
							<div
								key={blog.id}
								className=""
								onClick={() => setBlogData(index)}>
								<div className=" cursor-pointer shadow-xl duration-500 rounded-xl flex gap-2 hover:border-2">
									<figure className="w-[33%] ">
										<img
											className="rounded-l-xl"
											src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
											alt="blog"
										/>
									</figure>
									<div className=" w-[70%]">
										<h5 className="text-xl font-semibold tracking-tight">
											{blog.title}
										</h5>
										<p>{blog.summary.substring(0, 50)}</p>
										<button className=" ml-32 hover:underline hover:text-blue-500">
											Learn more
										</button>
									</div>
								</div>
							</div>
						))}
						<style>{`
							.scroll-container::-webkit-scrollbar {
								display: none; /* Hide scrollbar in Webkit browsers (Chrome, Safari, Opera) */
							}

							.scroll-container {
								scrollbar-width: none; /* Hide scrollbar in Firefox */
								-ms-overflow-style: none; /* Hide scrollbar in IE 10+ */
							}
						`}</style>
					</section>
				</div>
			) : (
				<div className="flex justify-center items-center w-full h-[85vh]">
					<span className="loading loading-spinner text-info"></span>
				</div>
			)}
		</Layout>
	);
};

export default Blogs;
