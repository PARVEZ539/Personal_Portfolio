import { Link } from "react-router-dom";
import LeftArrow from "../icons/LeftArrow";

const skills = {
  languages: [
    { name: "TypeScript", years: 2 },
    { name: "JavaScript", years: 2 },
    { name: "Python", years: 3 },
    { name: "Java", years: 0.5 },
    { name: "Dart", years: 2 },
    { name: "C#", years: 2 },
    { name: "HTML5/CSS3", years: 3 },
  ],
  frameworks: [
    { name: "React.js", years: 2 },
    { name: "FastAPI", years: 2 },
    { name: "Django", years: 2 },
    { name: "Spring Boot", years: 2 },
    { name: "Flutter", years: 2 },
    { name: "Tailwind CSS", years: 2 },
  ],
  databases: [
    { name: "MySQL", years: 2 },
    { name: "PostgreSQL", years: 2 },
    { name: "DynamoDB", years: 2 },
  ],
  cloud: [
    { name: "AWS", years: 2 },
    { name: "AWS Bedrock", years: 1 },
  ],
  tools: [
    { name: "Docker", years: 2 },
    { name: "Git/GitHub", years: 4 },
  ],
  os: [
    { name: "Windows", years: 4 },
    { name: "Linux", years: 2 },
    { name: "Mac", years: 4 },
  ],
};

const phases = [
  { name: "要件定義", years: 2 },
  { name: "基本設計", years: 2 },
  { name: "詳細設計", years: 2 },
  { name: "実装", years: 4 },
  { name: "テスト", years: 4 },
  { name: "運用保守", years: 2 },
];

const experiences = [
  {
    company: "株式会社エスワイシステム",
    period: "2024年4月 〜 2026年4月",
    industry: "システム開発・人材派遣",
    projects: [
      {
        title: "建設業界向け安全管理システム開発",
        period: "2024年7月 〜 2026年4月",
        scale: "15名",
        phases: ["要件定義", "基本設計", "詳細設計", "開発", "テスト"],
        description:
          "派遣先の某システムソリューション会社にて、建設業界向けの安全管理システムの開発プロジェクト。フロントエンドからバックエンド、モバイルアプリまで一気通貫して担当。",
        tasks: [
          "React/TypeScript を用いた SPA の開発及び UI コンポーネントの実装",
          "Tailwind CSS を使用したレスポンシブデザインの実装",
          "Python/FastAPI を使用した RESTful API の設計・開発",
          "AWS Lambda 上での FastAPI アプリケーションのデプロイ",
          "AWS Bedrock を使用した AI チャットボットの設計・実装",
          "Flutter/Dart によるクロスプラットフォームモバイルアプリ開発",
          "AWS(S3、DynamoDB)を活用したサーバーレスアーキテクチャの設計・構築",
          "Docker を使用した開発環境の構築及びコンテナ化",
          "WebSocket を活用したリアルタイム更新機能の実装",
          "CSV/Excel 出力機能の開発（複数シート、動的カラム生成対応）",
          "画像編集機能の実装（fabric.js 使用）",
          "DynamoDB の同時実行制御とリトライロジックの実装",
          "コードレビュー及び品質改善活動",
        ],
        tech: [
          "TypeScript",
          "JavaScript",
          "Python",
          "Dart",
          "React",
          "FastAPI",
          "Flutter",
          "Tailwind CSS",
          "AWS Lambda",
          "S3",
          "DynamoDB",
          "Bedrock",
          "Docker",
          "Git/GitHub",
        ],
      },
      {
        title: "EC サイト開発（研修）",
        period: "2024年4月 〜 2024年6月",
        scale: "個人",
        phases: ["基本設計", "詳細設計", "開発", "テスト"],
        description:
          "入社後の研修として、Java/Spring Boot を使用した EC サイトの開発プロジェクト。バックエンドからフロントエンドまでの実装を担当。",
        tasks: [
          "Spring Boot を使用した RESTful API の設計・開発",
          "MySQL を使用したデータベース設計及びクエリ実装",
          "商品管理、カート機能、注文処理機能の実装",
          "ユーザー認証・認可機能の実装",
          "フロントエンド画面の実装",
          "単体テスト及び結合テストの実施",
        ],
        tech: ["Java", "HTML5/CSS3", "JavaScript", "Spring Boot", "MySQL"],
      },
    ],
  },
  {
    company: "本田技研工業株式会社",
    period: "2022年4月 〜 2024年3月",
    industry: "自動車製造業",
    projects: [
      {
        title: "自動車業界 車載システム開発",
        period: "2022年4月 〜 2024年3月",
        scale: "20名",
        phases: ["詳細設計", "開発", "テスト", "運用保守"],
        description:
          "自動車向け組み込みシステムの開発プロジェクト。車載システムの設計から開発、テストまでを担当。",
        tasks: [
          "C#による組み込みソフトウェアの設計・開発",
          "車載システムの機能テスト及びデバッグ",
          "仕様書作成及び技術ドキュメントの整備",
          "品質管理プロセスに基づく開発業務",
        ],
        tech: ["C#"],
      },
    ],
  },
];

const qualifications = [
  { name: "日本語能力試験 JLPT N3", year: "2019年8月" },
  { name: "日本語能力試験 JLPT N2", year: "2024年8月" },
  { name: "日本語能力試験 JLPT N1", year: "2025年8月" },
  { name: "TOEIC 820点", year: "2021年3月" },
];

const selfProjects = [
  "アイトラッキングマウス",
  "指紋認証",
  "顔認証",
  "チャットボット",
  "ポートフォリオサイト",
  "レストランECサイト",
];

const SkillBar = ({ years, max = 4 }: { years: number; max?: number }) => (
  <div className="flex items-center gap-2 min-w-30">
    <div className="flex-1 bg-gray-700 rounded-full h-1.5">
      <div
        className="bg-orange-400 h-1.5 rounded-full"
        style={{ width: `${(years / max) * 100}%` }}
      />
    </div>
    <span className="text-xs text-gray-400 w-12 text-right">{years}年</span>
  </div>
);

const SkillSection = ({
  title,
  items,
}: {
  title: string;
  items: { name: string; years: number }[];
}) => (
  <div>
    <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
      {title}
    </h4>
    <div className="space-y-2">
      {items.map((item) => (
        <div
          key={item.name}
          className="flex items-center justify-between gap-4"
        >
          <span className="text-sm text-gray-200 w-28 shrink-0">
            {item.name}
          </span>
          <SkillBar years={item.years} />
        </div>
      ))}
    </div>
  </div>
);

const Badge = ({ label }: { label: string }) => (
  <span className="text-xs bg-gray-700 text-orange-300 border border-orange-400/20 rounded px-2 py-0.5">
    {label}
  </span>
);

const AboutDetail = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white px-6 py-20">
      <div className="max-w-4xl mx-auto">
        {/* Back button */}
        <Link
          to="/"
          className="flex items-center gap-2 text-orange-400 hover:text-orange-300 mb-10 text-sm"
        >
          <LeftArrow /> Back to Home
        </Link>

        <h1 className="text-4xl font-bold mb-10 text-center">About Me</h1>

        {/* Summary */}
        <p className="text-lg leading-relaxed mb-12 text-gray-300">
          日本での開発経験4年以上を持つフルスタックエンジニアです。本田技研工業にてC#を用いた車載システムの設計・開発・テストを約2年間担当しておりました。
          その後、株式会社エスワイシステムにてReact/TypeScriptからPython/FastAPI、Flutter/Dartまでフルスタックに対応しております。
          AWSを活用したサーバーレスアーキテクチャの構築や、AWS
          Bedrockを使用したAIチャットボットの実装経験もあります。
          現在は約15名規模のプロジェクトメンバーとして、機能追加・リファクタリング・コードレビューを担当しています。
        </p>

        <hr className="border-gray-700 my-10" />

        {/* Technical Skills */}
        <section className="mb-14">
          <h2 className="text-2xl font-bold mb-8">テクニカル スキル</h2>

          {/* Phases */}
          <div className="mb-8 p-5 bg-gray-800 rounded-xl border border-gray-700">
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
              担当フェーズ
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {phases.map((p) => (
                <div
                  key={p.name}
                  className="flex items-center justify-between gap-3"
                >
                  <span className="text-sm text-gray-200 w-24 shrink-0">
                    {p.name}
                  </span>
                  <SkillBar years={p.years} />
                </div>
              ))}
            </div>
          </div>

          {/* Skills grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="p-5 bg-gray-800 rounded-xl border border-gray-700">
              <SkillSection title="言語" items={skills.languages} />
            </div>
            <div className="p-5 bg-gray-800 rounded-xl border border-gray-700">
              <SkillSection title="フレームワーク" items={skills.frameworks} />
            </div>
            <div className="p-5 bg-gray-800 rounded-xl border border-gray-700">
              <SkillSection title="データベース" items={skills.databases} />
              <div className="mt-6">
                <SkillSection title="クラウド / AI" items={skills.cloud} />
              </div>
            </div>
            <div className="p-5 bg-gray-800 rounded-xl border border-gray-700">
              <SkillSection title="ツール" items={skills.tools} />
              <div className="mt-6">
                <SkillSection title="OS" items={skills.os} />
              </div>
            </div>
          </div>
        </section>

        <hr className="border-gray-700 my-10" />

        {/* Work Experience */}
        <section className="mb-14">
          <h2 className="text-2xl font-bold mb-8">Work Experience</h2>
          <div className="space-y-10">
            {experiences.map((exp) => (
              <div
                key={exp.company}
                className="border-l-2 border-orange-400 pl-6"
              >
                <div className="mb-1 text-orange-400 text-sm">{exp.period}</div>
                <h3 className="text-xl font-semibold mb-1">{exp.company}</h3>
                <p className="text-sm text-gray-400 mb-6">{exp.industry}</p>

                <div className="space-y-8">
                  {exp.projects.map((proj) => (
                    <div
                      key={proj.title}
                      className="bg-gray-800 rounded-xl border border-gray-700 p-5"
                    >
                      <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                        <h4 className="text-base font-semibold text-white">
                          {proj.title}
                        </h4>
                        <span className="text-xs text-gray-400">
                          {proj.period}
                        </span>
                      </div>

                      <p className="text-sm text-gray-300 mb-4 leading-relaxed">
                        {proj.description}
                      </p>

                      {/* Phases */}
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {proj.phases.map((ph) => (
                          <span
                            key={ph}
                            className="text-xs bg-orange-400/10 text-orange-300 border border-orange-400/20 rounded px-2 py-0.5"
                          >
                            {ph}
                          </span>
                        ))}
                        <span className="text-xs text-gray-500 ml-2 self-center">
                          {proj.scale}規模
                        </span>
                      </div>

                      {/* Tasks */}
                      <ul className="text-sm text-gray-300 space-y-1 mb-4 list-disc list-inside">
                        {proj.tasks.map((t) => (
                          <li key={t}>{t}</li>
                        ))}
                      </ul>

                      {/* Tech badges */}
                      <div className="flex flex-wrap gap-1.5 pt-3 border-t border-gray-700">
                        {proj.tech.map((t) => (
                          <Badge key={t} label={t} />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <hr className="border-gray-700 my-10" />

        {/* Qualifications */}
        <section className="mb-14">
          <h2 className="text-2xl font-bold mb-6">保有資格</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {qualifications.map((q) => (
              <div
                key={q.name}
                className="flex items-center gap-4 bg-gray-800 rounded-xl border border-gray-700 p-4"
              >
                <div className="w-2 h-2 rounded-full bg-orange-400 shrink-0" />
                <div>
                  <p className="text-sm font-medium text-white">{q.name}</p>
                  <p className="text-xs text-gray-400">{q.year}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <hr className="border-gray-700 my-10" />

        {/* Self-learning Projects */}
        <section className="mb-14">
          <h2 className="text-2xl font-bold mb-6">自己学習プロジェクト</h2>
          <div className="flex flex-wrap gap-3">
            {selfProjects.map((p) => (
              <span
                key={p}
                className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-full text-sm text-gray-200"
              >
                {p}
              </span>
            ))}
          </div>
        </section>

        <hr className="border-gray-700 my-10" />

        {/* Self PR */}
        <section className="mb-14">
          <h2 className="text-2xl font-bold mb-6">自己 PR</h2>

          <div className="space-y-6">
            <div className="p-6 bg-gray-800 rounded-xl border border-gray-700">
              <h3 className="text-lg font-semibold text-orange-400 mb-3">
                フルスタックに対応できる開発経験
              </h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                現在の業務では、フロントエンド（React/TypeScript）からバックエンド（Python/FastAPI）、モバイル開発（Flutter/Dart）まで、一貫してフルスタックに対応することができます。
                特にFastAPIを使用したRESTful
                APIの開発では、高速なレスポンスと効率的なCRUD操作の実装により、システムのパフォーマンス向上に貢献しています。
                また、AWS
                Bedrockを活用したAIチャットボットの実装では、LLMモデルとの連携による自然言語処理機能を開発し、ユーザーサポートの効率化を実現しました。
                未経験の技術に対しても、自走して学習し、短期間でキャッチアップする姿勢を持っています。
              </p>
            </div>

            <div className="p-6 bg-gray-800 rounded-xl border border-gray-700">
              <h3 className="text-lg font-semibold text-orange-400 mb-3">
                品質を重視した開発姿勢
              </h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                本田技研工業での組み込みシステム開発において、品質管理プロセスに基づいた開発業務を経験し、詳細なテスト設計によりトラブルの未然防止を徹底しました。
                現在の業務でも、DynamoDBの同時実行制御やリトライロジックの実装など、システムの安定性と信頼性を重視した開発を心がけています。
                また、コードレビューを通じてチーム全体の品質向上にも貢献しており、保守性の高いコードを書くことを常に意識しております。
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutDetail;
