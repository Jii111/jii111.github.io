---
layout: post
title: "기초확률론"
date: 2026-03-16 00:00:00
description: "기초확률론 핵심 개념 정리 — 집합, 확률공간, 확률변수, 분포, 생성함수"
tags: [statistics, probability, 확률론]
categories: study_notes
math: true
---

<style>
.post-title {
  font-weight: 700;
}

.post-content h2 {
  font-size: 1.2rem;
  font-weight: 700;
  margin-top: 2rem;
  margin-bottom: 0.5rem;
  border-left: 4px solid #222;
  background: none;
  padding: 0.3em 0.7em;
  color: #222;
}

.post-content h3,
.post-content h4,
.post-content p,
.post-content li,
.post-content td,
.post-content th {
  font-size: 0.95rem;
  font-weight: 400;
}

.post-content h3 {
  font-weight: 600;
}

.post-content blockquote {
  border-left: none;
  background: none;
  padding: 0;
  margin: 0.3em 0;
  font-size: 0.95rem;
}

.post-content blockquote p {
  margin-bottom: 0;
}
</style>

## Chap 1. 집합과 계수기법

- **드모르간의 법칙**: $$(A \cup B)^c = A^c \cap B^c$$, $$(A \cap B)^c = A^c \cup B^c$$
- **가산 집합**: 유한 집합 / 가산무한(자연수, 정수, 유리수) / 비가산무한(실수, 무리수)

---

## Chap 2. 확률 — 확률공간 $$(\Omega, \mathcal{A}, P)$$

**공리적 확률**: 표본 공간의 모든 부분집합에 확률을 할당할 수 있다고 가정.

① 임의의 사상 $$A$$: $$P(A) \ge 0$$

② $$P(\Omega) = 1$$

③ (중요) $$A_i \cap A_j = \emptyset\;(i \ne j)$$이면, $$P\!\left(\bigcup_{i=1}^\infty A_i\right) = \sum_{i=1}^\infty P(A_i)$$

**확률의 기본 성질**:

- $$P(\emptyset) = 0$$, $$P(A) \le 1$$
- $$P(A^c) = 1 - P(A)$$
- $$A \subset B \Rightarrow P(A) \le P(B)$$
- $$P(A \cup B) = P(A) + P(B) - P(A \cap B)$$

**확률의 중요한 성질 — 연속성의 성질**:

$$A_1 \subset A_2 \subset \cdots \Rightarrow P\!\left(\bigcup_1^\infty A_n\right) = \lim_{n \to \infty} P(A_n)$$

$$A_1 \supset A_2 \supset \cdots \Rightarrow P\!\left(\bigcap_1^\infty A_n\right) = \lim_{n \to \infty} P(A_n)$$

**부울의 부등식**: $$P\!\left(\bigcup_{i=1}^n A_i\right) \le \sum_{i=1}^n P(A_i)$$

---

## Chap 3. 조건부 확률, 베이즈 정리, 사상의 독립

**조건부 확률** $$P(A \mid B)$$: 사상 $$B$$를 새로운 표본공간으로 생각하는 것. 공리 3가지 다 만족.

**베이즈 공식**:

$$P(B_i \mid A) = \frac{P(B_i) P(A \mid B_i)}{\sum_j P(B_j) P(A \mid B_j)}$$

**사상의 독립**: $$P(A \cap B) = P(A) P(B)$$

$$A_i, \ldots, A_n$$이 서로 독립 ↔ 이들로 이루어진 어떤 부분집합도 모두 서로 독립.

> $$P(A) > 0$$, $$P(B) > 0$$이면서 동시에 독립이고 서로 배반사상이 되는 경우는 일어나지 않는다.

---

## Chap 4. 이산확률변수, 기대값과 분산, 이산분포

- **확률변수**: 표본공간 위에서 정의된 실수값 함수 $$X : \Omega \to \mathbb{R}$$
- **이산확률변수**: $$X(\Omega) \to \mathbb{R}$$이 가산개인 확률 변수
- **pmf**: $$p_X(x) = P(X = x)$$
- **cdf**: $$F_X(x) = P(X \le x)$$

**cdf의 성질**: ①비감소, ②오른쪽 연속, ③ $$\lim_{x \to \infty} F(x) = 1$$, $$\lim_{x \to -\infty} F(x) = 0$$

### 여러 가지 이산분포

| 분포 | 특징 |
|------|------|
| **Bernoulli** | 각 시행의 결과는 성공/실패, 독립적 (복원 추출) |
| **Binomial** | n번 베르누이 시행에서 성공 횟수 |
| **Geometric** | 처음 성공까지의 횟수, 비기억성: $$P(X > n+k \mid X > n) = P(X > k)$$ |
| **Negative Binomial** | r번째 성공까지의 횟수 (기하분포 r개 합) |
| **Poisson** | $$np = \lambda$$, $$n \to \infty$$인 이항분포의 극한. $$\sum_{k=0}^\infty \frac{\lambda^k}{k!} = e^\lambda$$ |
| **Hypergeometric** | 비베르누이 시행, 유한 모집단. $$n \le 0.05N$$이면 Binomial로 수렴 |

---

## Chap 5. 연속확률변수, 위험률함수

**연속확률변수** (확률밀도함수 존재 시):

① $$f(x) \ge 0$$
② $$\int_{-\infty}^\infty f(x)\,dx = 1$$
③ $$P(a < X \le b) = \int_a^b f(x)\,dx$$
④ $$F'(x) = f(x)$$

### 여러 가지 연속확률분포

- **균등분포**: $$U(a, b)$$
- **정규분포**: $$f(x) = \frac{1}{\sqrt{2\pi}} e^{-x^2/2}$$ (표준). 가장 중요한 성질: 독립성 하에서 **가법성**
- **지수분포**: $$f(x) = \lambda e^{-\lambda x}$$, $$x \ge 0$$. 비기억성 갖는 유일한 연속분포. $$P(X > s+t \mid X > t) = P(X > s)$$
- **감마분포**: $$\Gamma(\alpha, \lambda)$$. $$\text{Exp}(\lambda) = \Gamma(1, \lambda)$$. 포아송 분포에서 자연적으로 발생
- **베타분포**: 유계구간 $$(0, 1)$$을 받침으로 가진 분포. $$B(a, b) = \frac{\Gamma(a)\Gamma(b)}{\Gamma(a+b)}$$
- **웨이블 분포**: $$\alpha, \beta$$에 따라 다양한 분포 → 생존 분석, 신뢰성 공학

**위험률함수** (수명이 $$t$$ 이상일 조건 아래서 $$t + \Delta t$$ 이내 사망할 확률):

$$\lambda(t) = \frac{f(t)}{1 - F(t)}, \quad R(t) = P(X > t) = 1 - F(t)$$

---

## Chap 6. 결합확률분포, 독립, 조건부 분포, 순서통계량

**결합 분포, 주변 분포, 조건부 분포**: 조건부 확률처럼 $$\cap$$ 대신 결합확률로!

**독립** (이산): $$P(x, y) = p_X(x) p_Y(y)$$
**독립** (연속): $$f(x, y) = f_X(x) f_Y(y)$$

**합의 분포** (convolution):

$$F_{X+Y}(a) = \int_{-\infty}^\infty F_Y(a - x)\,dF_X(x)$$

$$f_{X+Y}(a) = \int_{-\infty}^\infty f_Y(a - y) f_X(x)\,dx$$

**순서통계량의 결합분포**:

$$f_{Y_1, \ldots, Y_n}(y_1, \ldots, y_n) = n!\, f(y_1) f(y_2) \cdots f(y_n), \quad 0 < y_1 < y_2 < \cdots < y_n$$

---

## Chap 7. 기대값, 분산/공분산/상관계수, 조건부 기대값/분산

**마코브 부등식**: $$P(X \ge a) \le \frac{E(X)}{a}$$

**체비세프 부등식**: $$P(|X - E(X)| \ge a) \le \frac{\text{Var}(X)}{a^2}$$

**젠슨의 부등식**: $$f$$가 볼록함수이면 $$E(f(X)) \ge f(E(X))$$

**공분산**:

$$\text{Cov}(X, Y) = E[(X - E(X))(Y - E(Y))]$$

$$\text{Var}\!\left(\sum_i a_i X_i\right) = \sum_i a_i^2 \text{Var}(X_i) + 2\sum_{i < j} a_i a_j \text{Cov}(X_i, X_j)$$

**상관계수**: $$\rho(X, Y) = \frac{\text{Cov}(X, Y)}{\sqrt{\text{Var}(X)\text{Var}(Y)}}$$, $$|\rho(X, Y)| \le 1$$

**코시-슈바르츠 부등식**: $$[E(XY)]^2 \le E(X^2) E(Y^2)$$

**조건부 기댓값**:

$$E(X) = E[E(X \mid Y)]$$

$$\text{Var}(X) = E[\text{Var}(X \mid Y)] + \text{Var}(E(X \mid Y))$$

---

## Chap 8. 생성함수와 극한정리

**확률생성함수**: $$Q_X(r) = E(r^X)$$

**적률생성함수 (MGF)**: $$M_X(t) = E(e^{tX})$$, $$|t| < d$$

- $$M_X'(0) = E(X) = \mu$$, $$M_X''(0) = E(X^2) = \mu^2 + \sigma^2$$
- 선형변환: $$Y = aX + b \Rightarrow M_Y(t) = e^{bt} M_X(at)$$
- 독립성 정리, 유일성 정리, 연속성 정리 모두 만족

**정규모집단으로부터 추출한 통계량의 분포**:

$$X_i \sim N(\mu, \sigma^2) \text{ (독립)} \Rightarrow \bar{X} \sim N\!\left(\mu, \frac{\sigma^2}{n}\right)$$

$$\frac{(n-1)S^2}{\sigma^2} \sim \chi^2(n-1)$$

$$\frac{\bar{X} - \mu}{S/\sqrt{n}} \sim t(n-1)$$

**F분포**: $$U \sim \chi^2(v_1)$$, $$V \sim \chi^2(v_2)$$ 독립 → $$F = \frac{U/v_1}{V/v_2} \sim F(v_1, v_2)$$

### 극한정리

**약대수법칙**: $$n$$이 클 때 독립, 동등분포의 평균이 $$\mu$$ 근처에 있게 됨 (체비세프 부등식으로 증명).

**중심극한정리 (CLT)**:

$$T_n = \frac{\bar{X} - \mu}{\sigma/\sqrt{n}} \xrightarrow{d} N(0, 1)$$

> mgf로 증명 → 통계적 추론에 응용. 근사하는 속도는 분포가 정규분포와 얼마나 비슷하게 생겼는지에 따라 다름.
