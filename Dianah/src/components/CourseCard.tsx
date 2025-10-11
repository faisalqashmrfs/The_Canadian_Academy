interface CourseCardProps {
    title: string;
    description: string;
    image: string;
    ageRange?: string;
    timing?: string;
}

export default function CourseCard({
    title,
    description,
    image,
    ageRange,
    timing,
}: CourseCardProps) {
    return (
        <div className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col transition-transform hover:scale-[1.01]">
            {/* الصورة */}
            <div className="w-full h-52 overflow-hidden">
                <img src={image} alt={title} className="w-full h-full object-cover" />
            </div>

            {/* المحتوى */}
            <div className="p-5 flex flex-col flex-grow">
                {/* العنوان */}
                <h3 className="text-xl font-bold text-red-600 mb-1">{title}</h3>

                {/* معلومات العمر والتوقيت */}
                {(timing || ageRange) && (
                    <p className="text-sm text-gray-500 mb-3">
                        {timing && <span>{timing}</span>}
                        {timing && ageRange && <span> • </span>}
                        {ageRange && <span>{ageRange}</span>}
                    </p>
                )}

                {/* الوصف */}
                <p className="text-gray-700 text-sm mb-6 flex-grow">{description}</p>

                {/* الأزرار */}
                <div className="flex gap-3 mt-auto">
                    <button className="bg-red-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-red-700 transition">
                        Enroll Now
                    </button>
                    <button className="border border-red-600 text-red-600 px-4 py-2 rounded-full text-sm font-medium hover:bg-red-50 transition">
                        See More
                    </button>
                </div>
            </div>
        </div>
    );
}
